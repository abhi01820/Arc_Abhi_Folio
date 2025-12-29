"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaClock, FaUser, FaEnvelope, FaBuilding, FaClipboard } from 'react-icons/fa';

interface DownloadRequest {
  id: string;
  name: string;
  email: string;
  company: string;
  purpose: string;
  status: 'pending' | 'approved' | 'denied';
  requestedAt: string;
  respondedAt?: string;
}

export default function AdminDashboard() {
  const [requests, setRequests] = useState<DownloadRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = () => {
    // Simple password protection - you can enhance this
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  const fetchRequests = async () => {
    try {
      const response = await fetch('/api/download-request');
      if (response.ok) {
        const data = await response.json();
        setRequests(data.requests || []);
      }
    } catch (error) {
      console.error('Error fetching requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id: string, action: 'approve' | 'deny') => {
    const baseUrl = window.location.origin;
    const actionUrl = `${baseUrl}/admin/approve-download?id=${id}&action=${action}`;
    
    // Open in new tab
    window.open(actionUrl, '_blank');
    
    // Refresh the list after a short delay
    setTimeout(() => {
      fetchRequests();
    }, 2000);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchRequests();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full mx-4"
        >
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Admin Access
          </h1>
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && authenticate()}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={authenticate}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Access Dashboard
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Resume Download Requests
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage and review resume download requests
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4">Loading requests...</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {requests.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg"
              >
                <FaClipboard className="text-4xl text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">No download requests yet</p>
              </motion.div>
            ) : (
              requests.map((request, index) => (
                <motion.div
                  key={request.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 ${
                    request.status === 'pending' ? 'border-yellow-500' :
                    request.status === 'approved' ? 'border-green-500' :
                    'border-red-500'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <FaUser className="text-gray-400" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {request.name}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          request.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                          request.status === 'approved' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                          'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}>
                          {request.status === 'pending' && <><FaClock className="inline mr-1" />Pending</>}
                          {request.status === 'approved' && <><FaCheck className="inline mr-1" />Approved</>}
                          {request.status === 'denied' && <><FaTimes className="inline mr-1" />Denied</>}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                          <FaEnvelope className="text-gray-400" />
                          <span>{request.email}</span>
                        </div>
                        
                        {request.company && (
                          <div className="flex items-center gap-2">
                            <FaBuilding className="text-gray-400" />
                            <span>{request.company}</span>
                          </div>
                        )}
                        
                        <div className="col-span-full">
                          <strong>Purpose:</strong> {request.purpose}
                        </div>
                        
                        <div>
                          <strong>Requested:</strong> {new Date(request.requestedAt).toLocaleString()}
                        </div>
                        
                        {request.respondedAt && (
                          <div>
                            <strong>Responded:</strong> {new Date(request.respondedAt).toLocaleString()}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {request.status === 'pending' && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleAction(request.id, 'approve')}
                          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                        >
                          <FaCheck />
                          Approve
                        </button>
                        <button
                          onClick={() => handleAction(request.id, 'deny')}
                          className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                        >
                          <FaTimes />
                          Deny
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}
        
        <div className="mt-8 text-center">
          <button
            onClick={fetchRequests}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Refresh Requests
          </button>
        </div>
      </div>
    </div>
  );
}