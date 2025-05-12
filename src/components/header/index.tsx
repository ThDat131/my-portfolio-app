import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { headerItems } from './constant';

const Header = () => {
  return (
    <div className='w-full flex justify-end px-12 bg-white fixed -top-0 left-0 right-0 h-[5vh]'>
      <NavigationMenu>
        <NavigationMenuList>
          {headerItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                href={item.href}
                className={`${navigationMenuTriggerStyle()}} h-12`}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Header;
