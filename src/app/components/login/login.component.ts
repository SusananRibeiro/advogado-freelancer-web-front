import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/Usuario';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router'; 
import { NavbarService } from 'src/app/services/NavbarService';
import { UsuarioAtual } from 'src/app/components/login/usuario.atual';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private service: LoginService = inject(LoginService);
  private router: Router = inject(Router);
  public usuarios: Usuario[] = [];
  constructor(public navbarService: NavbarService) {}

  @ViewChild("formulario") formulario: NgForm | undefined;

  ngOnInit(): void {
    this.get();
  }

  public get() {
    this.service.get().subscribe(
      (response: any) => {
        this.usuarios = response;
      },
      (error: any) => {
        //alert("Erro ao buscar usuarios!")
      }
    )
  }

  public login(formulario: NgForm): void {
    this.service.saveLogin(formulario.value, formulario.value.id).subscribe(
      (response: any) => {
        UsuarioAtual.setIdUsuarioAtual(response);
        this.router.navigate(['/audiencias']);
      },
      (error: any) => {
        if (error.status === 401) {
          alert('Usuário ou senha inválida.');
        } else {
          alert('Erro ao realizar o login.');
        }
      }
    );
  }

  // Chamar o MODAL
  abrirModal() {
    const modelDiv = document.getElementById('janelaModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  fecharModal() {
    const modelDiv = document.getElementById('janelaModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

}
