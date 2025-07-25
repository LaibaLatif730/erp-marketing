import { DollarSign, ShoppingCart, Package, LineChart, FileText, Users, Truck, Receipt,  Tag } from 'lucide-react';
import { CheckCircle, UsersRound, HeartHandshake } from 'lucide-react';

const commercialOverviewCards = [
    {
      title: "Total Sales ",
      amount: "$328K. This month",
      lmprofit: "+22.3%",
      icon: DollarSign,
      items: ["from last month"],
      // Default (Light Mode) styles for the card, overridden by dark: classes
      bg: "bg-gradient-to-b from-zinc-100 to-white", // From image analysis
      imageBg: "bg-yellow-100 group-hover:bg-yellow-200 transition-colors duration-200 dark:bg-orange-900/30 dark:group-hover:bg-orange-800/50", // From image analysis
      iconColor: "text-yellow-600 dark:text-orange-500", // From image analysis
      textColor: "text-zinc-600 dark:text-zinc-200", // From image analysis
      subTextColor: "text-zinc-900 dark:text-white", // From image analysis
      borderColor: "border-gray-200" // From image analysis
    },
    {
      title: "Total Purchases ",
      amount: "$231K. This month",
      lmprofit: "+22.3%",
      icon: ShoppingCart,
      items: ["from last month"],
      // Default (Light Mode) styles for the card, overridden by dark: classes
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-yellow-100 group-hover:bg-yellow-200 transition-colors duration-200 dark:bg-orange-900/30 dark:group-hover:bg-orange-800/50",
      iconColor: "text-yellow-600 dark:text-orange-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-gray-200"
    },
    {
      title: "Gross Profit",
      amount: " $97K. This month",
      lmprofit: "+22.3%",
      icon: LineChart,
      items: ["from last month"],
      // Default (Light Mode) styles for the card, overridden by dark: classes
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-yellow-100 group-hover:bg-yellow-200 transition-colors duration-200 dark:bg-orange-900/30 dark:group-hover:bg-orange-800/50",
      iconColor: "text-yellow-600 dark:text-orange-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-gray-200"
    },
    {
      title: "Active Orders ",
      amount: "$156K. This month",
      lmprofit: "-22.3%",
      icon: Package,
      items: ["from last month"],
      // Default (Light Mode) styles for the card, overridden by dark: classes
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-yellow-100 group-hover:bg-yellow-200 transition-colors duration-200 dark:bg-orange-900/30 dark:group-hover:bg-orange-800/50",
      iconColor: "text-yellow-600 dark:text-orange-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-gray-200"
    }
  ];

  interface SalesRepresentativeCardProps {
  id: number; // Added id to props interface as it's used for key
  name: string;
  status: 'active' | 'inactive' | 'on leave'; // Explicitly define possible string literal values
  email: string;
  phone: string;
  totalSales: string;
  avatarUrl?: string; // Optional prop
}

  
  export const salesRepresentativesData: SalesRepresentativeCardProps[] = [
    {
      id: 1, // Added unique id
      name: "John Smith",
      status: "active",
      email: "john.smith@largify.com",
      phone: "+1 (555) 123-4567",
      totalSales: "$425K",
      avatarUrl: "https://placehold.co/40x40/4299E1/ffffff?text=JS",
    },
    {
      id: 2, // Added unique id
      name: "Sarah Johnson",
      status: "active",
      email: "sarah.johnson@largify.com",
      phone: "+1 (555) 234-5678",
      totalSales: "$380K",
      avatarUrl: "https://placehold.co/40x40/38A169/ffffff?text=SJ",
    },
    {
      id: 3, // Added unique id
      name: "Mike Chen",
      status: "inactive",
      email: "mike.chen@largify.com",
      phone: "+1 (555) 345-6789",
      totalSales: "$290K",
      avatarUrl: "https://placehold.co/40x40/E53E3E/ffffff?text=MC",
    },
    {
      id: 4, // Added unique id
      name: "Emily Davis",
      status: "on leave",
      email: "emily.davis@largify.com",
      phone: "+1 (555) 456-7890",
      totalSales: "$210K",
      avatarUrl: "https://placehold.co/40x40/ECC94B/ffffff?text=ED", 
    },
    {
      id: 5, // Added unique id
      name: "David Lee",
      status: "active",
      email: "david.lee@largify.com",
      phone: "+1 (555) 567-8901",
      totalSales: "$510K",
      avatarUrl: "https://placehold.co/40x40/4299E1/ffffff?text=DL", 
    },
  ];
  
  export const cards = [
    {title: "Sales Representatives", value: "5", icon: UsersRound, 
    textColor: "text-zinc-600 dark:text-zinc-200",
    subTextColor: "text-zinc-900 dark:text-white",},
    {title: "Active Representatives", value: "3", icon: CheckCircle, 
    textColor: "text-zinc-600 dark:text-zinc-200",
    subTextColor: "text-zinc-900 dark:text-white",},
    {title: "Total Deals", value: "78", icon: HeartHandshake, 
    textColor: "text-zinc-600 dark:text-zinc-200",
    subTextColor: "text-zinc-900 dark:text-white",},
    {title: "Total Reveneue", value: "$1.5M", icon: DollarSign, 
    textColor: "text-zinc-600 dark:text-zinc-200",
    subTextColor: "text-zinc-900 dark:text-white",},
  ]

  // All Commercial Modules for Quick Actions
  export const commercialModules = [
    {
      title: "Sales",
      description: "Manage sales operations",
      icon: DollarSign,
      route: "/commercial/sales",
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-green-100 group-hover:bg-green-200 transition-colors duration-200 dark:bg-green-900/30 dark:group-hover:bg-green-800/50",
      iconColor: "text-green-600 dark:text-green-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-green-200 dark:border-green-800"
    },
    {
      title: "Purchase Department",
      description: "Handle procurement",
      icon: ShoppingCart,
      route: "/commercial/purchase",
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-blue-100 group-hover:bg-blue-200 transition-colors duration-200 dark:bg-blue-900/30 dark:group-hover:bg-blue-800/50",
      iconColor: "text-blue-600 dark:text-blue-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-blue-200 dark:border-blue-800"
    },
    {
      title: "Invoices",
      description: "Manage billing",
      icon: Receipt,
      route: "/commercial/invoices",
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-purple-100 group-hover:bg-purple-200 transition-colors duration-200 dark:bg-purple-900/30 dark:group-hover:bg-purple-800/50",
      iconColor: "text-purple-600 dark:text-purple-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-purple-200 dark:border-purple-800"
    },
    {
      title: "Quotations",
      description: "Create quotes",
      icon: FileText,
      route: "/commercial/quotations",
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-orange-100 group-hover:bg-orange-200 transition-colors duration-200 dark:bg-orange-900/30 dark:group-hover:bg-orange-800/50",
      iconColor: "text-orange-600 dark:text-orange-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-orange-200 dark:border-orange-800"
    },
    {
      title: "Orders",
      description: "Track orders",
      icon: Package,
      route: "/commercial/orders",
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-indigo-100 group-hover:bg-indigo-200 transition-colors duration-200 dark:bg-indigo-900/30 dark:group-hover:bg-indigo-800/50",
      iconColor: "text-indigo-600 dark:text-indigo-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-indigo-200 dark:border-indigo-800"
    },
    {
      title: "Customers",
      description: "Manage clients",
      icon: Users,
      route: "/commercial/customers",
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-teal-100 group-hover:bg-teal-200 transition-colors duration-200 dark:bg-teal-900/30 dark:group-hover:bg-teal-800/50",
      iconColor: "text-teal-600 dark:text-teal-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-teal-200 dark:border-teal-800"
    },
    {
      title: "Suppliers",
      description: "Vendor management",
      icon: Truck,
      route: "/commercial/suppliers",
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-red-100 group-hover:bg-red-200 transition-colors duration-200 dark:bg-red-900/30 dark:group-hover:bg-red-800/50",
      iconColor: "text-red-600 dark:text-red-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-red-200 dark:border-red-800"
    },
    {
      title: "Products",
      description: "Product catalog",
      icon: Package,
      route: "/commercial/products",
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-cyan-100 group-hover:bg-cyan-200 transition-colors duration-200 dark:bg-cyan-900/30 dark:group-hover:bg-cyan-800/50",
      iconColor: "text-cyan-600 dark:text-cyan-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-cyan-200 dark:border-cyan-800"
    },
    {
      title: "Pricing",
      description: "Price management",
      icon: Tag,
      route: "/commercial/pricing",
      bg: "bg-gradient-to-b from-zinc-100 to-white",
      imageBg: "bg-pink-100 group-hover:bg-pink-200 transition-colors duration-200 dark:bg-pink-900/30 dark:group-hover:bg-pink-800/50",
      iconColor: "text-pink-600 dark:text-pink-500",
      textColor: "text-zinc-600 dark:text-zinc-200",
      subTextColor: "text-zinc-900 dark:text-white",
      borderColor: "border-pink-200 dark:border-pink-800"
    }
  ];

  export default commercialOverviewCards;