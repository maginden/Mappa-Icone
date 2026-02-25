import React from 'react';
import {
  Home,
  Search,
  Menu,
  Settings,
  User,
  Heart,
  Share2,
  Trash2,
  Pencil,
  Save,
  ArrowLeft,
  X,
  MoreVertical,
  Bell,
  Wifi,
  Camera,
  Folder,
  Download,
  Play,
  RefreshCw,
  LucideProps
} from 'lucide-react';

const iconMap: { [key: string]: React.ComponentType<LucideProps> } = {
  Home,
  Search,
  Menu,
  Settings,
  User,
  Heart,
  Share2,
  Trash2,
  Pencil,
  Save,
  ArrowLeft,
  X,
  MoreVertical,
  Bell,
  Wifi,
  Camera,
  Folder,
  Download,
  Play,
  RefreshCw
};

interface IconWrapperProps extends LucideProps {
  name: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconMap.`);
    return null;
  }

  return <IconComponent {...props} />;
};
