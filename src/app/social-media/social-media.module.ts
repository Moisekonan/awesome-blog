import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostsService } from './services/posts.service';
import { PostsResolver } from './resolvers/posts.resolver';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { CommentsComponent } from '../shared/components/comments/comments.component';


@NgModule({
  declarations: [
    PostListItemComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule,
    SharedModule
  ],
  providers: [
    PostsService,
    PostsResolver
  ]
})
export class SocialMediaModule { }
