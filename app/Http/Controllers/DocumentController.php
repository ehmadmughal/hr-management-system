<?php

namespace App\Http\Controllers;

use App\Models\EmployeeDocument;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'document_name' => 'required|string|max:255',
            'file' => 'required|file|mimes:pdf,jpeg,png,jpg|max:10240', // 10MB max
            'expiration_date' => 'nullable|date',
            'employee_id' => 'required|exists:employees,id'
        ]);

        $date = Carbon::now()->format('Ymd_His'); // Example: 20240130_153012
        $extension = $request->file->getClientOriginalExtension();

        $fileName = "{$validated['employee_id']}_{$date}_{$validated['document_name']}.{$extension}";
        // Store the file
        $filePath = $request->file->storeAs('employee_documents', $fileName, 'public');

        $document = EmployeeDocument::create([
            'employee_id' => $validated['employee_id'],
            'document_name' => $validated['document_name'],
            'file_path' => $fileName,
            'expiration_date' => $validated['expiration_date']
        ]);

        return back()->with([
            'success' => 'Document uploaded successfully',
            'newDocument' => $document // Add this line
        ]);
    }
}
