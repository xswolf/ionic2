import { Platform, MenuController, Nav } from 'ionic-angular';
export declare class MyApp {
    platform: Platform;
    menu: MenuController;
    nav: Nav;
    tab1: any;
    tab2: any;
    tab3: any;
    tab4: any;
    pages: Array<{
        title: string;
        component: any;
    }>;
    constructor(platform: Platform, menu: MenuController);
    initializeApp(): void;
    openPage(page: any): void;
}
