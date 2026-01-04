import { getNavigationList } from '../model/selectors/getNavigationList';
import { NavigationItem } from './NavigationItem';

export const NavigationList = () => {
  const list = getNavigationList();

  return (
    <ul className={'flex items-center gap-[15px] uppercase tracking-widest'}>
      {list.map((item) => (
        <NavigationItem title={item.title} key={item.title} />
      ))}
    </ul>
  );
};
