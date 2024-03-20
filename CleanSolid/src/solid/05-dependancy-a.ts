import { PostService } from './05-dependancy-b';
import {
  JsonDatabaseService,
  LocalDataBaseService,
  WebApiService,
} from './05-dependancy-c';

// Main
(async () => {
  //   const provider = new JsonDatabaseService();
  //   const provider = new LocalDataBaseService();
  //   const postService = new PostService(provider);
  const postService = new WebApiService();

  const posts = await postService.getPosts();

  console.log({ posts });
})();
