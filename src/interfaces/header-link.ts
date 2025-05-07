export interface NavigationItem {
  title: string;
  href?: string;
  icon?: string;
  onClickAction?: () => void;
  target?: '_blank' | '_self' | '_parent' | '_top';
  children?: NavigationItem[];
  isNew?: boolean;
  isFeatured?: boolean;
}
