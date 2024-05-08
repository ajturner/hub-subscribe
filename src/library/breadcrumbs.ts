// Library for Hub navigation breadcrumbs

export interface IHubBreadcrumb {
  title: string;
  link: string;
  icon: string;
}

function getBreadcrumbIconFromTitle(title: string): string {
    switch(true) {
        case /data/.test(title):
            return "data"
        case /pages/.test(title):
            return "file-text";
        default:
            return "apps";
    }
}

export function getBreadcrumbsFromPath(path: string): Array<IHubBreadcrumb> {
    const pathArray = path.replace(/^\//,'').split('/').filter(item => item !== '');
    console.debug('getBreadcrumbsFromPath: path', [path, path.replace(/^\//,''), pathArray]);
    const breadcrumbs = pathArray.map((path, index) => {
    return {
      title: path,
      link: pathArray.slice(0, index + 1).join('/'),
      icon: getBreadcrumbIconFromTitle(path),
    };
  });
  return breadcrumbs;
}