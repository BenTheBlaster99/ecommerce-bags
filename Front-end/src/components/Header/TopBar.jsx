import React from "react";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

function TopBar(props) {
  return (
    <div className="w-full bg-white border-b border-gray-100 py-2">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-4 w-4" />
          <span className="text-sm text-gray-600">Help & FAQs</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-normal hover:bg-gray-50"
          >
            EN
          </Button>
          <span className="text-gray-300">|</span>
          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-normal hover:bg-gray-50"
          >
            FR
          </Button>
          <span className="text-gray-300">|</span>
          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-normal hover:bg-gray-50"
          >
            AR
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
