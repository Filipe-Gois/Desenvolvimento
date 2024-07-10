//herança: quando uma classe herda características de outra classe
//se a classe filho n tiver um construtor, ela vai usar o construtor da classe pai
//super:refere-se à classe pai

class Conta {
  protected numero: number;
  protected titular: string;
  private saldoConta: number;
  constructor(titular: string) {
    this.numero = this.gerarNumeroConta();
    this.titular = titular;
    this.saldoConta = 0;
  }
  private gerarNumeroConta(): number {
    const numero = Math.floor(Math.random() * 100000) + 1;
    return numero;
  }

  protected info(): void {
    console.log(`Titular: ${this.titular}. Número da conta: ${this.numero}`);
  }

  public saldo(): number {
    return this.saldoConta;
  }

  protected deposito(valor: number) {
    this.saldoConta += valor;
  }

  protected saque(valor: number): void {
    if (valor <= 0) {
      console.log("Valor deve ser maior que zero!");
      return;
    }
    if (this.saldoConta >= valor) {
      this.saldoConta -= valor;
    } else {
      console.log("Saldo insuficiente!");
    }
  }
}

class PessoaFisica extends Conta {
  cpf: number;
  constructor(titular: string, cpf: number) {
    super(titular);
    this.cpf = cpf;
    console.log(`Titular: ${this.titular}`);
  }
  info() {
    //invoca o .info() da classe pai
    super.info();
    console.log(`CPF: ${this.cpf}`);
  }
  deposito(valor: number) {
    if (valor <= 1000) {
      super.deposito(valor);
    } else {
      console.log("Valor muito alto!");
    }
  }
  saque(valor: number): void {
    if (valor > 1000) {
      console.log("Valor muito alto!");
    } else {
      super.saque(valor);
    }
  }
}

class PessoaJuridica extends Conta {
  cnpj: number;
  constructor(titular: string, cnpj: number) {
    super(titular);
    this.cnpj = cnpj;
    console.log(`Titular: ${this.titular}`);
  }
  info() {
    //invoca o .info() da classe pai
    super.info();
    console.log(`CNPJ: ${this.cnpj}`);
  }
  deposito(valor: number) {
    if (valor <= 10000) {
      super.deposito(valor);
    } else {
      console.log("Valor muito alto!");
    }
  }

  saque(valor: number): void {
    if (valor > 10000) {
      console.log("Valor muito alto!");
    } else {
      super.saque(valor);
    }
  }
}

const contaPf1 = new PessoaFisica("Filipe", 28866720178);

const contaPj1 = new PessoaJuridica("Filipe JURIDICO", 72591720178);

contaPj1.deposito(10000);
contaPj1.saque(5000);
contaPj1.saque(5000);
console.log(contaPj1.saldo());
