using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace quiztask
{
  
      
       


    
        internal class BankTransfer : IpaymentMethod
        {
            public void ProcesPayment()
            {
                Console.WriteLine("Processing bank transfer payment...");
            }

            public void ProcesRefund()
            {
                Console.WriteLine("Processing bank transfer refund...");
            }
        }

        public class PayPal : IpaymentMethod
        {
            public void ProcesPayment()
            {
                Console.WriteLine("Processing PayPal payment...");
            }

            public void ProcesRefund()
            {
                Console.WriteLine("Processing PayPal refund...");
            }
        }

        public class CreditCard : IpaymentMethod
        {
            public void ProcesPayment()
            {
                Console.WriteLine("Processing credit card payment...");
            }

            public void ProcesRefund()
            {
                Console.WriteLine("Processing credit card refund...");
            }
        }

        public interface IpaymentMethod
        {
            void ProcesPayment();
            void ProcesRefund();
        }

        internal class Program
        {
            private static void Main(string[] args)
            {
                IpaymentMethod paypal = new PayPal();
                IpaymentMethod creditCard = new CreditCard();
                IpaymentMethod bankTransfer = new BankTransfer();

                ProcessPayment(paypal);
                ProcessRefund(paypal);

                ProcessPayment(creditCard);
                ProcessRefund(creditCard);

                ProcessPayment(bankTransfer);
                ProcessRefund(bankTransfer);
            }

            private static void ProcessPayment(IpaymentMethod paymentMethod)
            {
                Console.WriteLine("Processing Payment:");
                paymentMethod.ProcesPayment();
                Console.WriteLine();
            }

            private static void ProcessRefund(IpaymentMethod paymentMethod)
            {
                Console.WriteLine("Processing Refund:");
                paymentMethod.ProcesRefund();
                Console.WriteLine();
            }
        }
    
}
   