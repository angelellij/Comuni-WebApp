import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor{
    intercept(request:HttpRequest<any>, next:HttpHandler){
        
        
        return next.handle(request);
    }
}