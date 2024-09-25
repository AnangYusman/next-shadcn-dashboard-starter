import { NavItem } from '@/types';

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: 'Candice Schiner',
    company: 'Dell',
    role: 'Frontend Developer',
    verified: false,
    status: 'Active'
  },
  {
    id: 2,
    name: 'John Doe',
    company: 'TechCorp',
    role: 'Backend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    company: 'WebTech',
    role: 'UI Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 4,
    name: 'David Smith',
    company: 'Innovate Inc.',
    role: 'Fullstack Developer',
    verified: false,
    status: 'Inactive'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    company: 'TechGuru',
    role: 'Product Manager',
    verified: true,
    status: 'Active'
  },
  {
    id: 6,
    name: 'James Brown',
    company: 'CodeGenius',
    role: 'QA Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 7,
    name: 'Laura White',
    company: 'SoftWorks',
    role: 'UX Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 8,
    name: 'Michael Lee',
    company: 'DevCraft',
    role: 'DevOps Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 9,
    name: 'Olivia Green',
    company: 'WebSolutions',
    role: 'Frontend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 10,
    name: 'Robert Taylor',
    company: 'DataTech',
    role: 'Data Analyst',
    verified: false,
    status: 'Active'
  }
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'Konten',
    href: '/dashboard/user',
    icon: 'user',
    label: 'Konten',
    children: [
      {
        title: 'Audio Visual',
        href: '/dashboard/audio',
        label: 'AudioVisual',
        icon: 'music',
        children: [
          {
            title: 'Music',
            href: '/dashboard/audio/music',
            label: 'Music'
          }
        ]
      },
      {
        title: 'Audio',
        href: '/dashboard/audio',
        label: 'Audio',
        icon: 'mic'
      },
      {
        title: 'Foto',
        href: '/dashboard/audio',
        label: 'Foto',
        icon: 'image'
      },
      {
        title: 'Teks',
        href: '/dashboard/audio',
        label: 'Teks',
        icon: 'notebook'
      },
      {
        title: 'SPIT',
        href: '/dashboard/audio',
        label: 'SPIT',
        icon: 'folder'
      }
    ]
  },
  {
    title: 'Agenda Setting',
    href: '/dashboard/employee',
    icon: 'file1',
    label: 'agendasetting'
  },
  {
    title: 'Perencanaan',
    href: '/dashboard/profile',
    icon: 'file2',
    label: 'perencanaan',
    children: [
      {
        title: 'Mediahub',
        href: '/dashboard/audio',
        label: 'file2',
        icon: 'mic'
      },
      {
        title: 'Medsos Mediahub',
        href: '/dashboard/audio',
        label: 'file2',
        icon: 'image'
      }
    ]
  },
  {
    title: 'Penugasan',
    href: '/dashboard/kanban',
    icon: 'kanban',
    label: 'penugasan'
  },
  {
    title: 'Jadwal ',
    href: '/dashboard/kanban',
    icon: 'schedule',
    label: 'penugasan',
    children: [
      {
        title: 'Konfrensi Pers',
        href: '/dashboard/audio',
        label: 'file2',
        icon: 'confrensi'
      },
      {
        title: 'Event',
        href: '/dashboard/audio',
        label: 'pers',
        icon: 'pers'
      },
      {
        title: 'Pers Rilis',
        href: '/dashboard/audio',
        label: 'pers',
        icon: 'pers'
      }
    ]
  },
  {
    title: 'Indeks',
    href: '/dashboard/kanban',
    icon: 'index',
    label: 'penugasan'
  },
  {
    title: 'Kurasi Konten',
    href: '/dashboard/kanban',
    icon: 'curated',
    label: 'penugasan'
  },
  {
    title: 'Komunikasi',
    href: '/dashboard/kanban',
    icon: 'communication',
    label: 'penugasan'
  },
  {
    title: 'Lomba',
    href: '/dashboard/kanban',
    icon: 'tropy',
    label: 'penugasan'
  },
  {
    title: 'Login',
    href: '/',
    icon: 'login',
    label: 'login'
  }
];
