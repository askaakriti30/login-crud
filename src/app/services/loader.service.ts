import { Subject } from 'rxjs';

export class LoadingService {
  //Note: This loader should be called through HTTP Interceptor but since havent used any HTTP call here just a static loader service is called

  public static onChange = new Subject<boolean>();

  public static show() {
    LoadingService.onChange.next(true);
  }

  public static hide() {
      
    setInterval(() => {
        LoadingService.onChange.next(false);
    }, 1100)
  }
}