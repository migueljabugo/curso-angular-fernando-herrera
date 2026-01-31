import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "@auth/services/auth.service";
import { Observable, tap } from "rxjs";

export function authInterceptor(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
  ) {

    const token = inject(AuthService).token();

    //Agrega la autorización a todas las peticiones que se realizan desde el cliente
    const newReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    return next(newReq);
}
