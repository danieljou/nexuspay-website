// 'use client'

// import { useState } from 'react'
import nexusLogo from '../../public/images/nexuslogo.png' // Adjust path if needed
import Image from 'next/image'

// export default function PhoneMockup() {
//   const [currentScreen, setCurrentScreen] = useState('home')
//   const [activeNavItem, setActiveNavItem] = useState('home')
//   const [showSuccess, setShowSuccess] = useState(false)
//   const [formData, setFormData] = useState({
//     recipient: '',
//     amount: '',
//     message: ''
//   })

//   const switchToHome = () => {
//     setCurrentScreen('home')
//     setActiveNavItem('home')
//   }

//   const switchToSendMoney = () => {
//     setCurrentScreen('sendMoney')
//     setActiveNavItem('send')
//   }

//   const showSuccessAnimation = () => {
//     if (formData.recipient && formData.amount) {
//       setShowSuccess(true)
//       setTimeout(() => {
//         setShowSuccess(false)
//         setFormData({ recipient: '', amount: '', message: '' })
//         switchToHome()
//       }, 2000)
//     }
//   }

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }))
//   }

//   return (
//     <div className="relative">
//       {/* Phone Container */}
//       <div className="phone-container">
//         <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
          
//           {/* Status Bar */}
//           <div className="flex justify-between items-center px-6 py-3 bg-white text-black text-sm">
//             <div className="flex items-center space-x-1">
//               <div className="text-xs font-medium">9:41 AM</div>
//             </div>
//             <div className="flex items-center space-x-2">
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M2 17h20v2H2v-2zM1.15 12.95L4 15.8l.85-.85L2.7 12.8l2.15-2.15L4 9.8 1.15 12.95zM6.7 12.8l2.15 2.15.85-.85L7.55 12.95 9.7 10.8l-.85-.85L6.7 12.8zM23 12.95L20.15 15.8l-.85-.85 2.15-2.15-2.15-2.15.85-.85L23 12.95z"/>
//               </svg>
//               <div className="w-6 h-3 border border-black rounded-sm">
//                 <div className="w-4 h-1 bg-black rounded-sm mt-0.5 ml-0.5"></div>
//               </div>
//             </div>
//           </div>

//           {/* App Navigation */}
//           <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-white-600 to-purple-600 text-white">
//             {/* Logo */}
//           <div className="flex items-center space-x-3">
            
//             <div className="text-2xl font-bold flex items-center">
//               <div className="">
//                 <Image src={nexusLogo} alt="Nexus Pay Logo" width={48} height={47} className="rounded-md" />
//               </div>
//               {/* <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
//                 Nexus<span className="font-extrabold">Pay</span>
//               </span> */}
//             </div>
//           </div>
//             <button className="p-2">
//               <svg className="w-8 h-8" fill="00809D" viewBox="0 0 24 24" stroke="00809D">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//               </svg>
//             </button>
//           </div>

//           {/* Home Screen */}
//           {currentScreen === 'home' && (
//             <div className="flex-1 bg-gray-50 p-4 h-[460px] overflow-y-auto">
//               {/* Balance Card */}
//               <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white mb-6">
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <div className="text-sm opacity-80 mb-1">Total Balance</div>
//                     <div className="text-3xl font-bold">₣127,500.00</div>
//                   </div>
//                   <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM13 17h-2v-6h2v6zm0-8h-2V7h2v2z"/>
//                     </svg>
//                   </div>
//                 </div>
                
//                 <div className="text-lg tracking-wider mb-6">
//                   •••• •••• •••• 7745
//                 </div>
                
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <div className="text-xs opacity-70">Valid Thru</div>
//                     <div className="text-sm">12/28</div>
//                   </div>
//                   <div className="text-right">
//                     <div className="text-xs opacity-70">CVV</div>
//                     <div className="text-sm">•••</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Quick Actions */}
//               <div className="grid grid-cols-4 gap-4 mb-6">
//                 <button 
//                   onClick={switchToSendMoney}
//                   className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
//                 >
//                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
//                     <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//                     </svg>
//                   </div>
//                   <div className="text-xs font-medium text-gray-700">Send</div>
//                 </button>
                
//                 <button className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
//                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
//                     <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//                     </svg>
//                   </div>
//                   <div className="text-xs font-medium text-gray-700">Receive</div>
//                 </button>
                
//                 <button className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
//                   <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
//                     <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
//                     </svg>
//                   </div>
//                   <div className="text-xs font-medium text-gray-700">Bills</div>
//                 </button>
                
//                 <button className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
//                   <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
//                     <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                     </svg>
//                   </div>
//                   <div className="text-xs font-medium text-gray-700">Top Up</div>
//                 </button>
//               </div>

//               {/* Transaction List */}
//               <div className="bg-white rounded-xl shadow-sm">
//                 <div className="p-4 border-b border-gray-100">
//                   <h3 className="font-semibold text-gray-800">Recent Transactions</h3>
//                 </div>
                
//                 <div className="p-4 flex items-center space-x-3 border-b border-gray-50">
//                   <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
//                     <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                     </svg>
//                   </div>
//                   <div className="flex-1">
//                     <div className="font-medium text-gray-800">Grocery Shopping</div>
//                     <div className="text-sm text-gray-500">Today 2:30 PM</div>
//                   </div>
//                   <div className="text-red-500 font-semibold">-₣15,750</div>
//                 </div>
                
//                 <div className="p-4 flex items-center space-x-3 border-b border-gray-50">
//                   <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                     <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
//                     </svg>
//                   </div>
//                   <div className="flex-1">
//                     <div className="font-medium text-gray-800">Money Received</div>
//                     <div className="text-sm text-gray-500">Yesterday 6:45 PM</div>
//                   </div>
//                   <div className="text-green-500 font-semibold">+₣25,000</div>
//                 </div>
                
//                 <div className="p-4 flex items-center space-x-3">
//                   <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
//                     <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
//                     </svg>
//                   </div>
//                   <div className="flex-1">
//                     <div className="font-medium text-gray-800">Electric Bill</div>
//                     <div className="text-sm text-gray-500">Dec 15, 2023</div>
//                   </div>
//                   <div className="text-red-500 font-semibold">-₣8,500</div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Send Money Screen */}
//           {currentScreen === 'sendMoney' && (
//             <div className="flex-1 bg-gray-50 h-[460px] overflow-y-auto">
//               <div className="p-4 border-b border-gray-100 bg-white">
//                 <div className="flex items-center">
//                   <button 
//                     onClick={switchToHome}
//                     className="mr-3 p-2 rounded-full hover:bg-gray-100"
//                   >
//                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//                     </svg>
//                   </button>
//                   <h2 className="text-lg font-semibold text-gray-800">Send Money</h2>
//                 </div>
//               </div>
              
//               {/* Recent Contacts */}
//               <div className="p-4">
//                 <h3 className="text-sm font-semibold text-gray-600 mb-3">Send to Recent</h3>
//                 <div className="grid grid-cols-4 gap-4 mb-6">
//                   <div className="flex flex-col items-center cursor-pointer">
//                     <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-semibold mb-1">MA</div>
//                     <div className="text-xs text-gray-600">Marie</div>
//                   </div>
//                   <div className="flex flex-col items-center cursor-pointer">
//                     <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mb-1">JM</div>
//                     <div className="text-xs text-gray-600">Jean</div>
//                   </div>
//                   <div className="flex flex-col items-center cursor-pointer">
//                     <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold mb-1">FT</div>
//                     <div className="text-xs text-gray-600">Francine</div>
//                   </div>
//                   <div className="flex flex-col items-center cursor-pointer">
//                     <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold mb-1">+</div>
//                     <div className="text-xs text-gray-600">More</div>
//                   </div>
//                 </div>
                
//                 {/* Send Money Form */}
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Recipient Email or Phone</label>
//                     <input 
//                       type="text" 
//                       value={formData.recipient}
//                       onChange={(e) => handleInputChange('recipient', e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="Enter email or phone number"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Amount (XAF)</label>
//                     <input 
//                       type="number" 
//                       value={formData.amount}
//                       onChange={(e) => handleInputChange('amount', e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="0.00"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
//                     <input 
//                       type="text" 
//                       value={formData.message}
//                       onChange={(e) => handleInputChange('message', e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="What's this for?"
//                     />
//                   </div>
                  
//                   <button 
//                     onClick={showSuccessAnimation}
//                     className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-shadow"
//                   >
//                     Send Money
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Bottom Navigation */}
//           <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 grid grid-cols-4">
//             <button 
//               onClick={switchToHome}
//               className={`flex flex-col items-center py-2 ${activeNavItem === 'home' ? 'text-blue-600' : 'text-gray-400'}`}
//             >
//               <svg className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//               </svg>
//               <span className="text-xs">Home</span>
//             </button>
            
//             <button 
//               onClick={switchToSendMoney}
//               className={`flex flex-col items-center py-2 ${activeNavItem === 'send' ? 'text-blue-600' : 'text-gray-400'}`}
//             >
//               <svg className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//               </svg>
//               <span className="text-xs">Send</span>
//             </button>
            
//             <button className="flex flex-col items-center py-2 text-gray-400">
//               <svg className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//               </svg>
//               <span className="text-xs">Cards</span>
//             </button>
            
//             <button className="flex flex-col items-center py-2 text-gray-400">
//               <svg className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//               </svg>
//               <span className="text-xs">Profile</span>
//             </button>
//           </div>

//           {/* Success Animation Overlay */}
//           {showSuccess && (
//             <div className="absolute inset-0 bg-white flex items-center justify-center z-50">
//               <div className="text-center">
//                 <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
//                   <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Money Sent!</h3>
//                 <p className="text-gray-600">Transaction completed successfully</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

import '../../styles/PhoneMockup.css'
import { useState, useEffect } from 'react'
import { 
  Home, 
  Send, 
  CreditCard, 
  User, 
  ArrowLeft, 
  Bell, 
  Eye, 
  EyeOff, 
  Plus, 
  Download, 
  Receipt, 
  Smartphone,
  Wifi,
  WifiOff,
  Check,
  X,
  Settings,
  HelpCircle,
  LogOut,
  QrCode,
  Scan,
  Globe,
  ShoppingCart,
  Zap,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  RefreshCw,
  TrendingUp,
  AlertCircle,
  ChevronRight,
  Search,
  Filter,
  MoreHorizontal
} from 'lucide-react'

export default function NexusPayApp() {
  const [currentScreen, setCurrentScreen] = useState('home')
  const [activeNavItem, setActiveNavItem] = useState('home')
  const [showBalance, setShowBalance] = useState(true)
  const [isOfflineMode, setIsOfflineMode] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [showQRScanner, setShowQRScanner] = useState(false)
  const [notifications, setNotifications] = useState(3)
  
  // Form states
  const [sendMoneyForm, setSendMoneyForm] = useState({
    recipient: '',
    amount: '',
    message: '',
    method: 'nexus' // nexus, orange, mtn, visa
  })
  
  const [topUpForm, setTopUpForm] = useState({
    amount: '',
    method: 'orange' // orange, mtn, bank
  })
  
  // User data
  const [userData, setUserData] = useState({
    name: 'Jean Dupont',
    phone: '+237 6XX XXX XXX',
    email: 'jean.dupont@email.com',
    balance: 127500,
    cardNumber: '4532 1234 5678 7745',
    cardExpiry: '12/28',
    cardCVV: '123'
  })
  
  // Transaction history
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: 'expense',
      category: 'Shopping',
      description: 'Grocery Shopping',
      amount: -15750,
      date: 'Today 2:30 PM',
      status: 'completed',
      method: 'card'
    },
    {
      id: 2,
      type: 'income',
      category: 'Transfer',
      description: 'Money Received from Marie',
      amount: 25000,
      date: 'Yesterday 6:45 PM',
      status: 'completed',
      method: 'nexus'
    },
    {
      id: 3,
      type: 'expense',
      category: 'Bills',
      description: 'Electric Bill - ENEO',
      amount: -8500,
      date: 'Dec 15, 2023',
      status: 'completed',
      method: 'card'
    },
    {
      id: 4,
      type: 'income',
      category: 'Top-up',
      description: 'Orange Money Top-up',
      amount: 50000,
      date: 'Dec 14, 2023',
      status: 'completed',
      method: 'orange'
    }
  ])
  
  const recentContacts = [
    { name: 'Marie', initial: 'MA', color: 'bg-pink-500', phone: '+237 6XX XXX XX1' },
    { name: 'Jean', initial: 'JM', color: 'bg-blue-500', phone: '+237 6XX XXX XX2' },
    { name: 'Francine', initial: 'FT', color: 'bg-green-500', phone: '+237 6XX XXX XX3' },
    { name: 'Paul', initial: 'PM', color: 'bg-orange-500', phone: '+237 6XX XXX XX4' }
  ]

  // Screen navigation functions
  const switchScreen = (screen, navItem = null) => {
    setCurrentScreen(screen)
    if (navItem) setActiveNavItem(navItem)
  }

  // Success animation
  const showSuccessAnimation = (message) => {
    setSuccessMessage(message)
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setSuccessMessage('')
    }, 2500)
  }

  // Handle send money
  const handleSendMoney = () => {
    if (sendMoneyForm.recipient && sendMoneyForm.amount) {
      const amount = parseFloat(sendMoneyForm.amount)
      if (amount <= userData.balance) {
        // Add transaction
        const newTransaction = {
          id: transactions.length + 1,
          type: 'expense',
          category: 'Transfer',
          description: `Sent to ${sendMoneyForm.recipient}`,
          amount: -amount,
          date: 'Just now',
          status: 'completed',
          method: sendMoneyForm.method
        }
        
        setTransactions([newTransaction, ...transactions])
        setUserData(prev => ({ ...prev, balance: prev.balance - amount }))
        setSendMoneyForm({ recipient: '', amount: '', message: '', method: 'nexus' })
        
        showSuccessAnimation(`₣${amount.toLocaleString()} sent successfully!`)
        setTimeout(() => switchScreen('home', 'home'), 2000)
      } else {
        alert('Insufficient balance')
      }
    }
  }

  // Handle top up
  const handleTopUp = () => {
    if (topUpForm.amount) {
      const amount = parseFloat(topUpForm.amount)
      const newTransaction = {
        id: transactions.length + 1,
        type: 'income',
        category: 'Top-up',
        description: `${topUpForm.method.toUpperCase()} Money Top-up`,
        amount: amount,
        date: 'Just now',
        status: 'completed',
        method: topUpForm.method
      }
      
      setTransactions([newTransaction, ...transactions])
      setUserData(prev => ({ ...prev, balance: prev.balance + amount }))
      setTopUpForm({ amount: '', method: 'orange' })
      
      showSuccessAnimation(`Account topped up with ₣${amount.toLocaleString()}!`)
      setTimeout(() => switchScreen('home', 'home'), 2000)
    }
  }

  // Phone mockup component
  const PhoneFrame = ({ children }) => (
    <div className="phone-container">
        <div className="h-full bg-white rounded-[2rem] overflow-hidden relative flex flex-col">
          {children}
        </div>
      </div>
  )

  // Status bar component
  const StatusBar = () => (
    <div className="flex justify-between items-center px-6 py-3 bg-white text-black text-sm font-medium">
      <div className="flex items-center space-x-2">
        <span>9:41 AM</span>
        {isOfflineMode ? <WifiOff className="w-4 h-4 text-red-500" /> : <Wifi className="w-4 h-4" />}
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex space-x-1">
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
        </div>
        <div className="w-6 h-3 border border-black rounded-sm relative">
          <div className="w-4 h-1 bg-black rounded-sm absolute top-0.5 left-0.5"></div>
        </div>
        <span className="text-xs">85%</span>
      </div>
    </div>
  )

  // Header component
  const Header = ({ title, showBack = false, showNotifications = false }) => (
    <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-20 to-purple-700 text-white">
      <div className="flex items-center">
        {showBack && (
          <button 
            onClick={() => switchScreen('home', 'home')}
            className="mr-3 p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
         <div className="">
                <Image src={nexusLogo} alt="Nexus Pay Logo" width={48} height={47} className="rounded-md" />
        </div>
      </div>
      {showNotifications && (
        <button 
          className="relative p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => switchScreen('notifications')}
        >
          <Bell className="w-6 h-6" />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">
              {notifications}
            </span>
          )}
        </button>
      )}
    </div>
  )

  // Bottom navigation
  const BottomNav = () => (
    <div className="grid grid-cols-4 bg-white border-t border-gray-200">
      {[
        { key: 'home', icon: Home, label: 'Home' },
        { key: 'send', icon: Send, label: 'Send' },
        { key: 'cards', icon: CreditCard, label: 'Cards' },
        { key: 'profile', icon: User, label: 'Profile' }
      ].map(({ key, icon: Icon, label }) => (
        <button
          key={key}
          onClick={() => switchScreen(key, key)}
          className={`flex flex-col items-center py-3 transition-colors ${
            activeNavItem === key ? 'text-blue-600' : 'text-gray-400'
          }`}
        >
          <Icon className="w-6 h-6 mb-1" />
          <span className="text-xs">{label}</span>
        </button>
      ))}
    </div>
  )

  // Home Screen
  const HomeScreen = () => (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      {/* Balance Card */}
      <div className="p-4">
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <div className="w-full h-full rounded-full border-2 border-white"></div>
          </div>
          
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-sm opacity-80 mb-1">Total Balance</div>
              <div className="text-3xl font-bold flex items-center">
                {showBalance ? `₣${userData.balance.toLocaleString()}.00` : '₣••••••••'}
                <button 
                  onClick={() => setShowBalance(!showBalance)}
                  className="ml-3 p-1 rounded-full hover:bg-white/10"
                >
                  {showBalance ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <CreditCard className="w-4 h-4" />
            </div>
          </div>
          
          <div className="text-lg tracking-wider mb-6 font-mono">
            {showBalance ? userData.cardNumber : '•••• •••• •••• ••••'}
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <div className="text-xs opacity-70">Valid Thru</div>
              <div className="text-sm">{showBalance ? userData.cardExpiry : '••/••'}</div>
            </div>
            <div className="text-right">
              <div className="text-xs opacity-70">CVV</div>
              <div className="text-sm">{showBalance ? userData.cardCVV : '•••'}</div>
            </div>
            <div className="text-xl font-bold">VISA</div>
          </div>
          
          {/* RFID Indicator */}
          <div className="absolute bottom-4 left-6">
            <div className="flex items-center text-xs opacity-70">
              <Wifi className="w-3 h-3 mr-1" />
              <span>NFC/RFID</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-4 gap-4">
          {[
            { 
              label: 'Send', 
              icon: Send, 
              color: 'bg-blue-100 text-blue-600', 
              action: () => switchScreen('send', 'send')
            },
            { 
              label: 'Receive', 
              icon: QrCode, 
              color: 'bg-green-100 text-green-600',
              action: () => switchScreen('receive')
            },
            { 
              label: 'Bills', 
              icon: Receipt, 
              color: 'bg-orange-100 text-orange-600',
              action: () => switchScreen('bills')
            },
            { 
              label: 'Top Up', 
              icon: Plus, 
              color: 'bg-purple-100 text-purple-600',
              action: () => switchScreen('topup')
            }
          ].map(({ label, icon: Icon, color, action }) => (
            <button 
              key={label}
              onClick={action}
              className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center mb-2`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium text-gray-700">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Offline Transfer Feature */}
      {isOfflineMode && (
        <div className="mx-4 mb-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
          <div className="flex items-center space-x-3">
            <WifiOff className="w-5 h-5 text-amber-600" />
            <div>
              <p className="text-sm font-medium text-amber-800">Offline Mode Active</p>
              <p className="text-xs text-amber-600">You can still send money using NFC/RFID</p>
            </div>
          </div>
        </div>
      )}

      {/* Recent Transactions */}
      <div className="mx-4 bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-semibold text-gray-800">Recent Transactions</h3>
          <button 
            onClick={() => switchScreen('transactions')}
            className="text-blue-600 text-sm font-medium"
          >
            View All
          </button>
        </div>
        
        {transactions.slice(0, 3).map((transaction) => (
          <div key={transaction.id} className="p-4 flex items-center space-x-3 border-b border-gray-50 last:border-b-0">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {transaction.category === 'Shopping' && <ShoppingCart className={`w-5 h-5 ${
                transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
              }`} />}
              {transaction.category === 'Transfer' && <Send className={`w-5 h-5 ${
                transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
              }`} />}
              {transaction.category === 'Bills' && <Receipt className={`w-5 h-5 ${
                transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
              }`} />}
              {transaction.category === 'Top-up' && <Plus className={`w-5 h-5 ${
                transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
              }`} />}
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-800 text-sm">{transaction.description}</div>
              <div className="text-xs text-gray-500">{transaction.date}</div>
            </div>
            <div className={`font-semibold ${
              transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
            }`}>
              {transaction.amount > 0 ? '+' : ''}₣{Math.abs(transaction.amount).toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      <div className="h-20"></div>
    </div>
  )

  // Send Money Screen
  const SendMoneyScreen = () => (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="p-4">
        {/* Method Selection */}
        <div className="bg-white rounded-xl p-4 mb-4">
          <h3 className="font-semibold text-gray-800 mb-3">Send via</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { key: 'nexus', label: 'NexusPay', icon: Send, desc: 'Instant & Free' },
              { key: 'orange', label: 'Orange Money', icon: Phone, desc: 'Standard rates' },
              { key: 'mtn', label: 'MTN Money', icon: Phone, desc: 'Standard rates' },
              { key: 'visa', label: 'International', icon: Globe, desc: 'VISA Network' }
            ].map(({ key, label, icon: Icon, desc }) => (
              <button
                key={key}
                onClick={() => setSendMoneyForm(prev => ({ ...prev, method: key }))}
                className={`p-3 rounded-lg border-2 transition-all ${
                  sendMoneyForm.method === key 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Icon className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                <div className="text-xs font-medium text-gray-800">{label}</div>
                <div className="text-xs text-gray-500">{desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Contacts */}
        <div className="bg-white rounded-xl p-4 mb-4">
          <h3 className="font-semibold text-gray-800 mb-3">Recent Contacts</h3>
          <div className="grid grid-cols-4 gap-4">
            {recentContacts.map((contact, index) => (
              <button
                key={index}
                onClick={() => setSendMoneyForm(prev => ({ ...prev, recipient: contact.phone }))}
                className="flex flex-col items-center"
              >
                <div className={`w-12 h-12 ${contact.color} rounded-full flex items-center justify-center text-white font-semibold mb-1`}>
                  {contact.initial}
                </div>
                <span className="text-xs text-gray-600">{contact.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Send Form */}
        <div className="bg-white rounded-xl p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recipient {sendMoneyForm.method === 'nexus' ? '(Email/Phone)' : '(Phone)'}
            </label>
            <input 
              type="text" 
              value={sendMoneyForm.recipient}
              onChange={(e) => setSendMoneyForm(prev => ({ ...prev, recipient: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={sendMoneyForm.method === 'nexus' ? 'Email or phone number' : 'Phone number'}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Amount (XAF)</label>
            <input 
              type="number" 
              value={sendMoneyForm.amount}
              onChange={(e) => setSendMoneyForm(prev => ({ ...prev, amount: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              placeholder="0"
            />
            <div className="text-xs text-gray-500 mt-1">
              Available: ₣{userData.balance.toLocaleString()}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
            <input 
              type="text" 
              value={sendMoneyForm.message}
              onChange={(e) => setSendMoneyForm(prev => ({ ...prev, message: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="What's this for?"
            />
          </div>
          
          <button 
            onClick={handleSendMoney}
            disabled={!sendMoneyForm.recipient || !sendMoneyForm.amount}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send ₣{sendMoneyForm.amount ? parseFloat(sendMoneyForm.amount).toLocaleString() : '0'}
          </button>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  )

  // Cards Screen
  const CardsScreen = () => (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="p-4">
        {/* Virtual Card */}
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white mb-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-sm opacity-80">Virtual Card</div>
              <div className="text-lg font-semibold">{userData.name}</div>
            </div>
            <div className="text-xl font-bold">VISA</div>
          </div>
          <div className="text-lg tracking-wider mb-4 font-mono">
            {userData.cardNumber}
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-xs opacity-70">Expires</div>
              <div className="text-sm">{userData.cardExpiry}</div>
            </div>
            <div>
              <div className="text-xs opacity-70">CVV</div>
              <div className="text-sm">{userData.cardCVV}</div>
            </div>
          </div>
        </div>

        {/* Physical Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-600 rounded-2xl p-6 text-white mb-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-sm opacity-80">Physical Card</div>
              <div className="text-lg font-semibold">{userData.name}</div>
            </div>
            <div className="flex items-center space-x-2">
              <Wifi className="w-4 h-4" />
              <span className="text-xl font-bold">VISA</span>
            </div>
          </div>
          <div className="text-lg tracking-wider mb-4 font-mono">
            {userData.cardNumber}
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-xs opacity-70">Expires</div>
              <div className="text-sm">{userData.cardExpiry}</div>
            </div>
            <div>
              <div className="text-xs opacity-70">Status</div>
              <div className="text-sm text-green-400">Active</div>
            </div>
          </div>
        </div>

        {/* Card Controls */}
        <div className="bg-white rounded-xl p-4 space-y-4">
          <h3 className="font-semibold text-gray-800">Card Controls</h3>
          
          {[
            { label: 'Freeze Card', icon: X, action: () => {} },
            { label: 'Change PIN', icon: Settings, action: () => {} },
            { label: 'Card Limits', icon: TrendingUp, action: () => {} },
            { label: 'Transaction Alerts', icon: Bell, action: () => {} }
          ].map(({ label, icon: Icon, action }) => (
            <button
              key={label}
              onClick={action}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-800">{label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  )

  // Profile Screen
  const ProfileScreen = () => (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="p-4">
        {/* User Info */}
        <div className="bg-white rounded-xl p-6 mb-4 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-white">{userData.name.split(' ').map(n => n[0]).join('')}</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">{userData.name}</h2>
          <p className="text-gray-600">{userData.email}</p>
          <p className="text-gray-600">{userData.phone}</p>
        </div>

        {/* Account Settings */}
        <div className="bg-white rounded-xl p-4 mb-4">
          <h3 className="font-semibold text-gray-800 mb-4">Account</h3>
          {[
            { label: 'Personal Information', icon: User },
            { label: 'Security Settings', icon: Settings },
            { label: 'Notification Preferences', icon: Bell },
            { label: 'Linked Accounts', icon: CreditCard }
          ].map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-800">{label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>

        {/* Support */}
        <div className="bg-white rounded-xl p-4 mb-4">
          <h3 className="font-semibold text-gray-800 mb-4">Support</h3>
          {[
            { label: 'Help Center', icon: HelpCircle },
            { label: 'Contact Support', icon: Mail },
            { label: 'Report Issue', icon: AlertCircle }
          ].map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-800">{label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>

        {/* App Settings */}
        <div className="bg-white rounded-xl p-4 mb-4">
          <h3 className="font-semibold text-gray-800 mb-4">App Settings</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center space-x-3">
                <WifiOff className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-800">Offline Mode</span>
              </div>
              <button
                onClick={() => setIsOfflineMode(!isOfflineMode)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  isOfflineMode ? 'bg-blue-600' : 'bg-gray-300'
                } relative`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                  isOfflineMode ? 'translate-x-6' : 'translate-x-0.5'
                }`}></div>
              </button>
            </div>
          </div>
        </div>

        {/* Logout */}
        <button className="w-full bg-red-50 text-red-600 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-red-100 transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </div>
      <div className="h-20"></div>
    </div>
  )

  // Top Up Screen
  const TopUpScreen = () => (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="p-4">
        {/* Current Balance */}
        <div className="bg-white rounded-xl p-4 mb-4 text-center">
          <div className="text-sm text-gray-600 mb-1">Current Balance</div>
          <div className="text-2xl font-bold text-gray-800">₣{userData.balance.toLocaleString()}</div>
        </div>

        {/* Top-up Methods */}
        <div className="bg-white rounded-xl p-4 mb-4">
          <h3 className="font-semibold text-gray-800 mb-3">Top-up Method</h3>
          <div className="space-y-3">
            {[
              { key: 'orange', label: 'Orange Money', icon: Phone, desc: 'Instant transfer', fee: 'Free' },
              { key: 'mtn', label: 'MTN Mobile Money', icon: Phone, desc: 'Instant transfer', fee: 'Free' },
              { key: 'bank', label: 'Bank Transfer', icon: CreditCard, desc: '1-2 business days', fee: '₣500' }
            ].map(({ key, label, icon: Icon, desc, fee }) => (
              <button
                key={key}
                onClick={() => setTopUpForm(prev => ({ ...prev, method: key }))}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                  topUpForm.method === key 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${topUpForm.method === key ? 'text-blue-600' : 'text-gray-600'}`} />
                    <div>
                      <div className="font-medium text-gray-800">{label}</div>
                      <div className="text-sm text-gray-500">{desc}</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-green-600">{fee}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Amount Selection */}
        <div className="bg-white rounded-xl p-4 mb-4">
          <h3 className="font-semibold text-gray-800 mb-3">Amount</h3>
          
          {/* Quick amounts */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[5000, 10000, 25000, 50000, 100000, 200000].map(amount => (
              <button
                key={amount}
                onClick={() => setTopUpForm(prev => ({ ...prev, amount: amount.toString() }))}
                className={`p-3 rounded-lg border-2 transition-all ${
                  topUpForm.amount === amount.toString()
                    ? 'border-blue-500 bg-blue-50 text-blue-600' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-semibold">₣{amount.toLocaleString()}</div>
              </button>
            ))}
          </div>

          {/* Custom amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Custom Amount (XAF)</label>
            <input 
              type="number" 
              value={topUpForm.amount}
              onChange={(e) => setTopUpForm(prev => ({ ...prev, amount: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              placeholder="Enter amount"
              min="1000"
              max="500000"
            />
            <div className="text-xs text-gray-500 mt-1">
              Minimum: ₣1,000 • Maximum: ₣500,000
            </div>
          </div>
        </div>

        {/* Top Up Button */}
        <button 
          onClick={handleTopUp}
          disabled={!topUpForm.amount || parseFloat(topUpForm.amount) < 1000}
          className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Top Up ₣{topUpForm.amount ? parseFloat(topUpForm.amount).toLocaleString() : '0'}
        </button>
      </div>
      <div className="h-20"></div>
    </div>
  )

  // Receive Money Screen
  const ReceiveMoneyScreen = () => (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="p-4">
        {/* QR Code */}
        <div className="bg-white rounded-xl p-6 mb-4 text-center">
          <h3 className="font-semibold text-gray-800 mb-4">Your QR Code</h3>
          <div className="w-48 h-48 bg-gray-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <QrCode className="w-32 h-32 text-gray-400" />
          </div>
          <p className="text-sm text-gray-600">
            Scan this code to send money to {userData.name}
          </p>
        </div>

        {/* Share Options */}
        <div className="bg-white rounded-xl p-4 mb-4">
          <h3 className="font-semibold text-gray-800 mb-3">Share Payment Link</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'WhatsApp', icon: Phone, color: 'bg-green-500' },
              { label: 'SMS', icon: Mail, color: 'bg-blue-500' },
              { label: 'Email', icon: Mail, color: 'bg-red-500' },
              { label: 'Copy Link', icon: Globe, color: 'bg-gray-500' }
            ].map(({ label, icon: Icon, color }) => (
              <button
                key={label}
                className={`${color} text-white p-4 rounded-lg font-medium flex items-center justify-center space-x-2`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Payment Request */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Request Payment</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Recipient's email or phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Amount (XAF)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="What's this for?"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold">
              Send Payment Request
            </button>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  )

  // Bills Screen
  const BillsScreen = () => (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="p-4">
        {/* Bill Categories */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            { label: 'Electricity', icon: Zap, color: 'bg-yellow-100 text-yellow-600', provider: 'ENEO' },
            { label: 'Water', icon: RefreshCw, color: 'bg-blue-100 text-blue-600', provider: 'CDE' },
            { label: 'Internet', icon: Wifi, color: 'bg-green-100 text-green-600', provider: 'Orange' },
            { label: 'Phone', icon: Phone, color: 'bg-purple-100 text-purple-600', provider: 'MTN' }
          ].map(({ label, icon: Icon, color, provider }) => (
            <button key={label} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-sm font-medium text-gray-800">{label}</div>
              <div className="text-xs text-gray-500">{provider}</div>
            </button>
          ))}
        </div>

        {/* Recent Bills */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Recent Bills</h3>
            <button className="text-blue-600 text-sm font-medium">View All</button>
          </div>
          
          {[
            { provider: 'ENEO', type: 'Electricity', amount: 8500, due: 'Due in 5 days', status: 'pending' },
            { provider: 'Orange', type: 'Internet', amount: 15000, due: 'Due in 12 days', status: 'pending' },
            { provider: 'CDE', type: 'Water', amount: 3500, due: 'Paid', status: 'paid' }
          ].map((bill, index) => (
            <div key={index} className="flex items-center justify-between p-3 border-b border-gray-50 last:border-b-0">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  bill.status === 'paid' ? 'bg-green-100' : 'bg-orange-100'
                }`}>
                  {bill.type === 'Electricity' && <Zap className={`w-5 h-5 ${
                    bill.status === 'paid' ? 'text-green-600' : 'text-orange-600'
                  }`} />}
                  {bill.type === 'Internet' && <Wifi className={`w-5 h-5 ${
                    bill.status === 'paid' ? 'text-green-600' : 'text-orange-600'
                  }`} />}
                  {bill.type === 'Water' && <RefreshCw className={`w-5 h-5 ${
                    bill.status === 'paid' ? 'text-green-600' : 'text-orange-600'
                  }`} />}
                </div>
                <div>
                  <div className="font-medium text-gray-800">{bill.provider} - {bill.type}</div>
                  <div className={`text-sm ${
                    bill.status === 'paid' ? 'text-green-600' : 'text-orange-600'
                  }`}>{bill.due}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-800">₣{bill.amount.toLocaleString()}</div>
                {bill.status === 'pending' && (
                  <button className="text-xs text-blue-600 font-medium">Pay Now</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  )

  // Transactions Screen
  const TransactionsScreen = () => (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="p-4">
        {/* Filter Bar */}
        <div className="flex space-x-3 mb-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Transaction List */}
        <div className="bg-white rounded-xl overflow-hidden">
          {transactions.map((transaction, index) => (
            <div key={transaction.id} className="p-4 border-b border-gray-50 last:border-b-0">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {transaction.category === 'Shopping' && <ShoppingCart className={`w-5 h-5 ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`} />}
                  {transaction.category === 'Transfer' && <Send className={`w-5 h-5 ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`} />}
                  {transaction.category === 'Bills' && <Receipt className={`w-5 h-5 ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`} />}
                  {transaction.category === 'Top-up' && <Plus className={`w-5 h-5 ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`} />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-gray-800 text-sm">{transaction.description}</div>
                      <div className="text-xs text-gray-500 flex items-center space-x-2">
                        <span>{transaction.date}</span>
                        <span>•</span>
                        <span className="capitalize">{transaction.method}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-semibold ${
                        transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {transaction.amount > 0 ? '+' : ''}₣{Math.abs(transaction.amount).toLocaleString()}
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        transaction.status === 'completed' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {transaction.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  )

  // Notifications Screen
  const NotificationsScreen = () => (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="p-4">
        <div className="bg-white rounded-xl overflow-hidden">
          {[
            {
              title: 'Payment Received',
              message: 'You received ₣25,000 from Marie Kamga',
              time: '2 minutes ago',
              type: 'success',
              read: false
            },
            {
              title: 'Card Transaction',
              message: 'Payment of ₣15,750 at SuperMarché Express',
              time: '1 hour ago',
              type: 'info',
              read: false
            },
            {
              title: 'Bill Reminder',
              message: 'Your ENEO bill of ₣8,500 is due in 5 days',
              time: '1 day ago',
              type: 'warning',
              read: true
            }
          ].map((notification, index) => (
            <div key={index} className={`p-4 border-b border-gray-50 last:border-b-0 ${
              !notification.read ? 'bg-blue-50' : ''
            }`}>
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  notification.type === 'success' ? 'bg-green-100' :
                  notification.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                }`}>
                  {notification.type === 'success' && <Check className="w-4 h-4 text-green-600" />}
                  {notification.type === 'warning' && <AlertCircle className="w-4 h-4 text-yellow-600" />}
                  {notification.type === 'info' && <Bell className="w-4 h-4 text-blue-600" />}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{notification.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{notification.message}</div>
                  <div className="text-xs text-gray-400 mt-2">{notification.time}</div>
                </div>
                {!notification.read && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  )

  // Success Animation Overlay
  const SuccessOverlay = () => showSuccess && (
    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
          <Check className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Success!</h3>
        <p className="text-gray-600">{successMessage}</p>
      </div>
    </div>
  )

  // Main render
  return (
 
    <PhoneFrame>
      <StatusBar />
      
      {/* Header */}
      {currentScreen === 'home' && <Header showNotifications={true} />}
      {currentScreen === 'send' && <Header title="Send Money" showBack={true} />}
      {currentScreen === 'cards' && <Header title="My Cards" showBack={true} />}
      {currentScreen === 'profile' && <Header title="Profile" showBack={true} />}
      {currentScreen === 'topup' && <Header title="Top Up" showBack={true} />}
      {currentScreen === 'receive' && <Header title="Receive Money" showBack={true} />}
      {currentScreen === 'bills' && <Header title="Bill Payments" showBack={true} />}
      {currentScreen === 'transactions' && <Header title="Transactions" showBack={true} />}
      {currentScreen === 'notifications' && <Header title="Notifications" showBack={true} />}

      {/* Screen Content */}
      {currentScreen === 'home' && <HomeScreen />}
      {currentScreen === 'send' && <SendMoneyScreen />}
      {currentScreen === 'cards' && <CardsScreen />}
      {currentScreen === 'profile' && <ProfileScreen />}
      {currentScreen === 'topup' && <TopUpScreen />}
      {currentScreen === 'receive' && <ReceiveMoneyScreen />}
      {currentScreen === 'bills' && <BillsScreen />}
      {currentScreen === 'transactions' && <TransactionsScreen />}
      {currentScreen === 'notifications' && <NotificationsScreen />}

      {/* Bottom Navigation */}
      {!['notifications'].includes(currentScreen) && <BottomNav />}

      {/* Success Overlay */}
      <SuccessOverlay />
    </PhoneFrame>

  )
}