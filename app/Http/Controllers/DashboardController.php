<?php

namespace App\Http\Controllers;

use App\Models\EmployeeDocument;
use App\Models\Globals;
use App\Services\CommonServices;
use Carbon\Carbon;
use Inertia\Inertia;

class DashboardController extends Controller
{

    public function index()
    {
        $commonServices = new CommonServices();
        $isTodayOff = $commonServices->isTodayOff();

        $attendanceChecker = auth()->user()->attendances()->where('date', Carbon::today()->toDateString())->first();

        if (is_null($attendanceChecker)) {
            $attendanceStatus = 0;
        } else if ($attendanceChecker->sign_off_time == null) {
            $attendanceStatus = 1;
        } else {
            $attendanceStatus = 2;
        }

        $expiringDocuments = EmployeeDocument::with('employee')->where('expiration_date', '>=', now())
            ->where('expiration_date', '<=', now()->addDays(60));

        if (!isAdmin()) {
            $expiringDocuments->where('employee_id', auth()->user()->id);
        }

        return Inertia::render('Dashboard', [
            'salary' => auth()->user()->salary(),
            'payroll_day' => Globals::first()->payroll_day,
            "employee_stats" => auth()->user()->myStats(),
            "attendance_status" => $attendanceStatus,
            "is_today_off" => $isTodayOff,
            "expiringDocuments" => $expiringDocuments->orderBy('expiration_date')
                ->paginate(config('constants.data.pagination_count'))
        ]);
    }
}
