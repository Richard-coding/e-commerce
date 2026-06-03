import { CreditCard, Receipt, ShieldCheck } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const CartPayment = () => {
  return (
    <div className="card-base rounded-3xl border-muted/20 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Receipt className="w-5 h-5 text-primary" />

        <h3 className="text-3xl font-bold text-secondary">Resumo do pedido</h3>
      </div>

      <p className="text-sm text-foreground/60 mt-1">
        Confira os valores antes de confirmar.
      </p>

      <div className="flex flex-col gap-4 mt-8 text-md">
        <div className="flex items-center justify-between ">
          <span className="text-soft">Subtotal</span>
          <span className="font-medium text-lg">R$ 73,43</span>
        </div>

        <div className="flex items-center justify-between ">
          <span className="text-soft">Taxa de entrega</span>
          <span className="font-medium text-lg">R$ 6,90</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-soft">Desconto</span>
          <span className="font-medium text-primary text-lg">- R$ 2,49</span>
        </div>
      </div>

      <div className="border-t border-muted/20 my-6" />

      <div className="flex items-center justify-between text-2xl font-bold">
        <span className=" text-secondary ">Total</span>
        <strong className=" text-primary">R$ 80,33</strong>
      </div>

      <NavLink
        to="/checkout"
        className="btn-primary w-full flex items-center justify-center mt-4"
      >
        Finalizar pedido
      </NavLink>

      <div className=" text-foreground/60 text-sm mt-4">
        <div className="flex gap-2 items-center">
          <CreditCard className="w-3 h-3" />
          <p> Pagamento seguro</p>
        </div>
        <div className="flex gap-2 items-center">
          <ShieldCheck className="w-3 h-3" />
          <p> Cancelamento em até 5 min</p>
        </div>
      </div>
    </div>
  );
};

export default CartPayment;
