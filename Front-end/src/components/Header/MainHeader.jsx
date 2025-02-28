import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, ShoppingCart, User, Sun, Moon, Search } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

function MainHeader(props) {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="container mx-auto flex items-center justify-between py-6 px-4">
      <div className="text-2x1 font-bold tracking-tight">THE PARTY EDIT</div>
      <div className="flex-1 mx-16">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-10 bg-gray-50 border-gray-200"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Button variant="ghost" size="icon" className="hover:bg-gray-50">
          <Heart className="h-5 w-5 text-gray-700" />
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-gray-50">
          <ShoppingCart className="h-5 w-5 text-gray-700" />
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-gray-50">
          <User className="h-5 w-5 text-gray-700" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-gray-50"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5 text-gray-700" />
          ) : (
            <Sun className="h-5 w-5 text-gray-700" />
          )}
        </Button>
      </div>
    </div>
  );
}

export default MainHeader;
