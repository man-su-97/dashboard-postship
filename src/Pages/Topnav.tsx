"use client";

import { useState } from "react";
import { Search, User, Settings, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLink = ({ href, children, isMobile = false }) => (
    <a
      href={href}
      className={`text-sm font-medium ${
        isMobile
          ? "block py-2 text-gray-700 hover:bg-gray-100"
          : "text-gray-500 hover:text-gray-900"
      }`}
    >
      {children}
    </a>
  );

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mr-2 md:hidden"
                  aria-label="Menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col space-y-4">
                  <NavLink href="#" isMobile>
                    Home
                  </NavLink>
                  <NavLink href="#" isMobile>
                    Orders
                  </NavLink>
                  <NavLink href="#" isMobile>
                    Integrations
                  </NavLink>
                  <NavLink href="#" isMobile>
                    Tracking Page
                  </NavLink>
                  <NavLink href="#" isMobile>
                    Partner with Us
                  </NavLink>
                </nav>
              </SheetContent>
            </Sheet>
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">Orders</NavLink>
              <NavLink href="#">Integrations</NavLink>
              <NavLink href="#">
                <span className="flex items-center">
                  Tracking Page
                  <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </NavLink>
              <NavLink href="#">Partner with Us</NavLink>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Input
                type="text"
                placeholder="Search"
                className="pl-8 pr-4 py-2 w-64"
              />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex text-gray-500 hover:text-gray-900"
            >
              <User className="h-5 w-5 mr-2" />
              Account
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex text-gray-500 hover:text-gray-900"
            >
              <Settings className="h-5 w-5 mr-2" />
              Settings
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Account"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
