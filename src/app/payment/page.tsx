'use client'

import React, { useEffect, useState } from 'react';
import { CheckCircle, XCircle, ArrowLeft, CreditCard, AlertTriangle } from 'lucide-react';

function PaymentStatusPage() {
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate getting search params (in Next.js you'd use useSearchParams())
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    const canceled = urlParams.get('canceled');
    
    setTimeout(() => {
      if (success === 'true') {
        setStatus('success');
      } else if (canceled === 'true') {
        setStatus('failure');
      } else {
        setStatus('unknown');
      }
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your payment...</p>
        </div>
      </div>
    );
  }

  const SuccessPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
            <p className="text-gray-600">
              Your subscription has been activated successfully. Welcome aboard!
            </p>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              <CreditCard className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm font-medium text-green-800">Subscription Active</span>
            </div>
            <p className="text-sm text-green-700">
              You now have access to all premium features
            </p>
          </div>

          <div className="space-y-3">
            <button 
              onClick={() => window.location.href = '/'}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            >
              Go Home
            </button>
            <button 
              onClick={() => window.location.href = '/account'}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            >
              View Account Settings
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-6">
            A confirmation email has been sent to your registered email address
          </p>
        </div>
      </div>
    </div>
  );

  const FailurePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Canceled</h1>
            <p className="text-gray-600">
              Your payment was canceled. No charges have been made to your account.
            </p>
          </div>
          
          <div className="bg-red-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
              <span className="text-sm font-medium text-red-800">Payment Not Completed</span>
            </div>
            <p className="text-sm text-red-700">
              You can try again or contact support if you need help
            </p>
          </div>

          <div className="space-y-3">
            <button 
              onClick={() => window.location.href = '/pricing'}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            >
              Try Again
            </button>
            <button 
              onClick={() => window.location.href = '/'}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back Home
            </button>
            {/* <button 
              onClick={() => window.location.href = '/support'}
              className="w-full text-gray-600 hover:text-gray-800 font-medium py-2 transition-colors duration-200"
            >
              Contact Support
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );

  const UnknownStatusPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-gray-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Status Unknown</h1>
            <p className="text-gray-600">
              We couldn&apos;t determine your payment status. Please check your account or contact support.
            </p>
          </div>
          
          <div className="space-y-3">
            <button 
              onClick={() => window.location.href = '/account'}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            >
              Check Account Status
            </button>
            <button 
              onClick={() => window.location.href = '/'}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (status === 'success') return <SuccessPage />;
  if (status === 'failure') return <FailurePage />;
  return <UnknownStatusPage />;
}

export default PaymentStatusPage;