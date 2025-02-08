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

    public function update(Request $request, $id)
    {

        $document = EmployeeDocument::findOrFail($id);
        $validated = $request->validate([
            'document_name' => 'required|string|max:255',
            'file' => 'nullable|file|max:10240', // File is optional for updates
            'expiration_date' => 'nullable|date',
            'employee_id' => 'required|exists:employees,id'
        ]);
        // Update file if provided
        if ($request->hasFile('file')) {
            $date = Carbon::now()->format('Ymd_His'); // Example: 20240130_153012
            $extension = $request->file->getClientOriginalExtension();

            $fileName = "{$validated['employee_id']}_{$date}_{$validated['document_name']}.{$extension}";
            // Store the file
            $filePath = $request->file->storeAs('employee_documents', $fileName, 'public');
            $validated['file_path'] = $fileName;
        }

        $document->update($validated);

        return back()->with('success', 'Document updated successfully');
    }
}
