'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types';
import { Dispatch, SetStateAction } from 'react';
import { useSidebar } from '@/hooks/useSidebar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip';

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isMobileNav?: boolean;
}

export function DashboardNav({
  items,
  setOpen,
  isMobileNav = false
}: DashboardNavProps) {
  const path = usePathname();
  const { isMinimized } = useSidebar();

  // Track open state of each dropdown
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  // Toggle state for dropdown items
  const toggleItem = (itemIndex: string) => {
    setOpenItems((prev) => ({ ...prev, [itemIndex]: !prev[itemIndex] }));
  };

  if (!items?.length) {
    return null;
  }

  // Recursive rendering for sidebar items
  const renderNavItems = (
    navItems: NavItem[],
    parentIndex: string | null = null
  ) => {
    return navItems.map((item, index) => {
      const itemIndex =
        parentIndex !== null ? `${parentIndex}-${index}` : `${index}`;
      const Icon = Icons[item.icon || 'arrowRight'];
      const isOpen = openItems[itemIndex];

      return (
        <div key={itemIndex}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className={cn(
                  'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                  path === item.href ? 'bg-accent' : 'transparent',
                  item.disabled && 'cursor-not-allowed opacity-80'
                )}
                onClick={() => {
                  // Toggle dropdown if item has children, otherwise navigate
                  if (item.children) {
                    toggleItem(itemIndex);
                  } else if (setOpen) {
                    setOpen(false);
                  }
                }}
              >
                <Icon className={`ml-3 size-5 flex-none`} />
                {isMobileNav || (!isMinimized && !isMobileNav) ? (
                  <span className="mr-2 truncate">{item.title}</span>
                ) : null}
                {/* Dropdown Arrow Icon */}
                {item.children && (
                  <Icons.chevronDown
                    className={cn('ml-auto transition-transform', {
                      'rotate-180': isOpen
                    })}
                  />
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent
              align="center"
              side="right"
              sideOffset={8}
              className={!isMinimized ? 'hidden' : 'inline-block'}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>

          {/* Render children if dropdown is open */}
          {item.children && isOpen && (
            <div className="pl-4">
              {renderNavItems(item.children, itemIndex)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <nav className="grid items-start gap-2">
      <TooltipProvider>{renderNavItems(items)}</TooltipProvider>
    </nav>
  );
}
