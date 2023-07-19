import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messageError'
})
export class MessageErrorPipe implements PipeTransform {

  transform(error: { key: string, value: any }, ...args: unknown[]): unknown {
  
    const errorMessages: Record <string,string> = {
      required: 'Campo Requerido',
      email: 'Debe ser un Email válido',
      minlength: 'El largo del dato es menor al requerido'
    }
    
    return errorMessages[error.key] || 'Campo inválido';
  }

}
