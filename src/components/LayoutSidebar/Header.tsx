import { cn } from '@/lib/utils';
import { MobileSidebar } from '@/components/LayoutSidebar/Mobile-sidebar';
import SearchInput from '../SearchInput';
import DatePickerInput from '../DatePickerInput';
import Image from 'next/image';
import bellIcon from '../../../public/assets/notificationIcon.svg';

export default function Header() {
  return (
    <div className="fixed left-0 right-0 top-0 z-20 bg-white md:ml-72">
      <nav className="flex h-16 md:h-[140px] items-center justify-between px-10">
        <div className={cn('md:!hidden w-full flex')}>
          <MobileSidebar />
        </div>

        <div className="hidden md:flex items-center justify-center gap-10 w-full">
          <SearchInput placeholder="Search" />
          <DatePickerInput />
          <Image
            src={bellIcon}
            alt="Bell icon"
            className="w-44 md:w-auto cursor-pointer hover:scale-110"
          />
        </div>
      </nav>
    </div>
  );
}
