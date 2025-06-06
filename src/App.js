import { Routes, Route } from 'react-router-dom'
// Admin
import AdminDashboard from './pages/admin/AdminDashboardPage'
import DevicePage from './pages/admin/AdminDevicePage'
import CustomerPage from './pages/admin/AdminCustomerPage'
import StaffPage from './pages/admin/AdminStaffPage'
import PackagePage from './pages/admin/AdminPackagePage'
import LoginPage from './pages/login/LoginPage'
import ReportPage from './pages/admin/AdminReportPage'
import FeedbackPage from './pages/admin/AdminFeedbackPage'
import GymRoom from './pages/admin/AdminGymRoomPage'

// Coach
import Dashboard from './pages/coach/Dashboard'
import Clients from './pages/coach/Clients'
import Schedule from './pages/coach/Schedule'
import TrainingPrograms from './pages/coach/TrainingPrograms'
import TrainingProgress from './pages/coach/TrainingProgress'
import Profiles from './pages/coach/TrainingPrograms'


// Staff
import StaffCustomerPage from './pages/staff/StaffCustomerPage'
import StaffFeedbackPage from './pages/staff/StaffFeedbackPage'
import StaffDevicePage from './pages/staff/StaffDevicePage'
import StaffGymRoomPage from './pages/staff/StaffGymRoomPage'
import StaffSubscriptionManagementPage from './pages/staff/StaffSubscriptionManagementPage'
import StaffDashboardPage from './pages/staff/StaffDashboardPage'


import UserDashboard from './pages/user/UserDashBoard'
import UserSchedule from './pages/user/UserSchedule'
import UserProgress from './pages/user/UserProgress'
import UserMembership from './pages/user/UserMembership'
import UserReview from './pages/user/UserReview'
import UserProfile from './pages/user/UserProfile'

function App() {
  return (
    <div>
      <Routes>
        {/* Login */}
        <Route path='/' element={<LoginPage />} />
        
        {/* Route Admin */}
        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
        <Route path='/admin/device' element={<DevicePage/>} />
        <Route path='/admin/customer' element={<CustomerPage/>} />
        <Route path='/admin/staff' element={<StaffPage/>} />
        <Route path='/admin/gymroom' element={<GymRoom/>} />
        <Route path='/admin/report' element={<ReportPage/>} />
        <Route path='/admin/package-management' element={<PackagePage/>} />
        <Route path='/admin/feedback-management' element={<FeedbackPage/>} />

        {/* Route Staff */}
        <Route path='/staff/dashboard' element={<StaffDashboardPage/>} />
        <Route path='/staff/subscription-management' element={<StaffSubscriptionManagementPage/>} />
        <Route path='/staff/feedback-management' element={<StaffFeedbackPage/>} />
        <Route path='/staff/customer' element={<StaffCustomerPage/>} />
        <Route path='/staff/gymroom' element={<StaffGymRoomPage/>} />
        <Route path='/staff/device' element={<StaffDevicePage/>} />


        {/* Route HLV */}
        <Route path='/coach/dashboard' element={<Dashboard />} />
        <Route path='/coach/clients' element={<Clients />} />
        <Route path='/coach/schedule' element={<Schedule />} />
        <Route path='/coach/training-progress' element={<TrainingProgress />} />
        <Route path='/coach/training-programs' element={<TrainingPrograms />} />
        <Route path='/coach/profile' element={<Profiles />} />

        {/* Route User */}
        <Route path='/user/dashboard' element={<UserDashboard />} />
        <Route path='/user/schedule' element={<UserSchedule />} />
        <Route path='/user/progress' element={<UserProgress />} />
        <Route path='/user/package' element={<UserMembership/> } />
        <Route path='/user/evaluate' element={<UserReview/> } />
        <Route path='/user/profile' element={<UserProfile/> } />

      </Routes>
    </div>
  )
}

export default App

