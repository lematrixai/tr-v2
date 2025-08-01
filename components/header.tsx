'use client'
import React, { useState, useEffect } from 'react'
import { Search, Menu, X, Globe, ChevronDown, Building2, Compass, Heart, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
              isScrolled 
          ? "bg-gradient-to-b from-black/80 via-black/40 to-black/5 backdrop-blur-xs pb-3" 
          : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 pt-8">
        <div className="flex items-center justify-between relative">
          {/* Mobile Navigation Menu */}
          <div className="flex items-center md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="w-10 h-10 rounded-full bg-transparent border-primary text-primary hover:bg-primary hover:border-primary"
                >
                  <Menu className="h-4 w-4 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] bg-white/95 backdrop-blur-md border-l border-gray-200/50">
                <SheetHeader className="border-b border-gray-200/50 pb-4 pt-2">
                  <SheetTitle className="text-left text-xl font-semibold text-gray-900">Menu</SheetTitle>
                </SheetHeader>
                
                {/* Navigation Section */}
                <div>
                  <nav className="space-y-1">
                    <a href="#about" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors font-medium">
                      <Building2 className="h-4 w-4" />
                      About Us
                    </a>
                    <a href="#tours" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors font-medium">
                      <Compass className="h-4 w-4" />
                      Tours
                    </a>
                    <a href="#reviews" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors font-medium">
                      <Heart className="h-4 w-4" />
                      Reviews
                    </a>
                    <a href="#contacts" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors font-medium">
                      <MessageCircle className="h-4 w-4" />
                      Contacts
                    </a>
                  </nav>
                </div>

                {/* Language Section */}
                <div className="mt-6 mb-8 px-4">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Language</h3>
                  <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                    <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200 rounded-lg">
                      <SelectItem value="en" className="flex items-center gap-2">
                        <span>English (EN)</span>
                      </SelectItem>
                      <SelectItem value="fr">
                        <span>Français (FR)</span>
                      </SelectItem>
                      <SelectItem value="es">
                        <span>Español (ES)</span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Footer */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Luxury Adventure Tours</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Language Selector (Desktop) */}
          <div className="hidden md:flex items-center z-10">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="w-10 h-10 rounded-full bg-transparent backdrop-blur-sm border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 shadow-sm"
                >
                  <Globe className="h-4 w-4 text-white" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-lg rounded-xl">
                <DropdownMenuItem className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer">
                  <span className="font-medium">English</span>
                  <span className="text-gray-500 text-sm">(EN)</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer">
                  <span>Français</span>
                  <span className="text-gray-500 text-sm">(FR)</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer">
                  <span>Español</span>
                  <span className="text-gray-500 text-sm">(ES)</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Navigation Links - Left Side (Desktop) */}
          <NavigationMenu className="hidden md:flex z-10">
            <NavigationMenuList className="space-x-8">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#about" 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-white/80 hover:text-primary bg-transparent hover:bg-transparent relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full flex items-center gap-2"
                  )}
                >
                  <Building2 className="h-4 w-4" />
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#tours" 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-white/80 hover:text-primary bg-transparent hover:bg-transparent relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full flex items-center gap-2"
                  )}
                >
                  <Compass className="h-4 w-4" />
                  Tours
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Central Logo - Absolute positioned */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 ">
            <Image 
              src="/logo.png" 
              priority 
              alt="logo" 
              width={150} 
              height={150} 
              className={cn(
                "w-50 h-50 max-md:w-40 max-md:h-40 object-contain transition-all duration-300 -mt-4",
                isScrolled ? "drop-shadow-md" : ""
                
              )}
            />
          </div>

          {/* Navigation Links - Right Side (Desktop) */}
          <NavigationMenu className="hidden md:flex z-10 py-4">
            <NavigationMenuList className="space-x-8">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#reviews" 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-white/80 hover:text-primary bg-transparent hover:bg-transparent relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full flex items-center gap-2"
                  )}
                >
                  <Heart className="h-4 w-4" />
                  Reviews
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#contacts" 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-white/80 hover:text-primary bg-transparent hover:bg-transparent relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full flex items-center gap-2"
                  )}
                >
                  <MessageCircle className="h-4 w-4" />
                  Contacts
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Section - Search Icon */}
          <div className="flex items-center z-10">
            <Button 
              variant="outline" 
              size="icon"
              className="w-10 h-10 rounded-full bg-transparent border-primary text-primary hover:bg-primary hover:border-primary"
            >
              <Search className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header