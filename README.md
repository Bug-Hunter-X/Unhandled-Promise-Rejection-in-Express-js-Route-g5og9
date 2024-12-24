# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in route handlers.  The `bug.js` file shows the problematic code, where an asynchronous operation is not properly handled. The `bugSolution.js` provides the corrected version with proper error handling, preventing silent failures.

## Problem
The initial code lacks a `catch` block to handle potential errors from the asynchronous operation (`someAsyncOperation()`).  If this operation fails, the error is silently swallowed, leading to unexpected behavior and making debugging difficult.

## Solution
The solution adds a `catch` block to handle the error.  It sends a proper error response to the client, providing more informative feedback.  This improves the robustness and user experience of the application.