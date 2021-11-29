import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecepieComponent} from './recepie/recepie.component';
import {RecepieDetailComponent} from './recepie/recepie-detail/recepie-detail.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {RecepieItemComponent} from './recepie/recepie-list/recepie-item/recepie-item.component';
import {RecepieListComponent} from './recepie/recepie-list/recepie-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserPageComponent} from './user-page/user-page.component';
import {EditUserComponent} from './user-page/edit-user/edit-user.component';
import {UserListComponent} from './user-page/user-list/user-list.component';
import {SearchUserComponent} from "./user-page/search-user/search-user.component";
import {RouterModule, Routes} from "@angular/router";
import {CreateUserComponent} from './user-page/create-user/create-user.component';
import {NotFoundComponent} from './user-page/not-found/not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import { HomePageComponent } from './home-group/home-page/home-page.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import { HomeGroupComponent } from './home-group/home-group.component';
import { UsersComponent } from './home-group/users/users.component';
import { GroupsComponent } from './home-group/groups/groups.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { DialogComponent } from './dialog/dialog.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import {UserService} from "./user-page/user-service.service";
import { FirstGroupComponent } from './home-group/first-group/first-group.component';
import { SecondGroupComponent } from './home-group/second-group/second-group.component';
import { GroupDialogComponent } from './group-dialog/group-dialog.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path: "", component: UserPageComponent},
  {path: "user-list", component: UserListComponent},
  {path: "edit-user/:id", component: EditUserComponent},
  {path: "search-user", component: SearchUserComponent},
  {path: "create", component: CreateUserComponent},
  {path: "home-page", component: HomePageComponent},
  {path: "users", component: UserListComponent},
  {path: "groups", component: GroupsComponent},
  {path: "first-group", component: FirstGroupComponent},
  {path: "second-group", component: SecondGroupComponent},
  {path: "**", component: NotFoundComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepieComponent,
    RecepieListComponent,
    RecepieDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecepieItemComponent,
    UserPageComponent,
    EditUserComponent,
    UserListComponent,
    SearchUserComponent,
    CreateUserComponent,
    NotFoundComponent,
    HomePageComponent,
    HomeGroupComponent,
    UsersComponent,
    GroupsComponent,
    DialogComponent,
    DeleteDialogComponent,
    FirstGroupComponent,
    SecondGroupComponent,
    GroupDialogComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  entryComponents: [
    DialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
