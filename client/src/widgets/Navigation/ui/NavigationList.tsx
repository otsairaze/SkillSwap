import { NavigationItem } from '@/widgets/Navigation/ui/NavigationItem';
import { getNavigationList } from '@/widgets/Navigation/model/selectors/getNavigationList';

export const NavigationList = () => {
  const list = getNavigationList();

  return (
    <ul className={'flex items-center gap-[15px]'}>
      {list.map((item) => (
        <NavigationItem title={item.title} icon={item.icon} key={item.title} />
      ))}
    </ul>
  );
};
