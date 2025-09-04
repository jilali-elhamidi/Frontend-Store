export default function Checkout() {
  return (
    <div className="w-[1360px] h-[1526.77px] relative bg-white rounded-[10px] -ml-12 -md:ml-20">
      <div className="w-24 h-5 left-[48px] top-[47.70px] absolute justify-center text-black text-lg font-bold uppercase leading-snug">checkout</div>

      <div className="w-[724.83px] h-16 left-[48px] top-[93.59px] absolute bg-stone-200 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stone-200">
        <div className="w-8 h-7 left-[17px] top-[17px] absolute">
          <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center text-black text-xl leading-normal" aria-hidden>
            <span role="img" aria-label="user">👤</span>
          </div>
        </div>
        <div className="w-64 h-6 left-[49px] top-[20.60px] absolute justify-center">
          <span className="text-black text-sm font-normal leading-normal"> Returning customer? </span>
          <span className="text-red-600 text-sm font-normal underline leading-normal">Click here to log in</span>
        </div>
      </div>

      <div className="w-[509.16px] h-16 left-[802.83px] top-[93.59px] absolute bg-stone-200 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stone-200">
        <div className="w-8 h-7 left-[17px] top-[17px] absolute">
          <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center text-black text-xl leading-normal" aria-hidden>
            <span role="img" aria-label="coupon">🏷️</span>
          </div>
        </div>
        <div className="w-80 h-6 left-[49px] top-[20.60px] absolute justify-center">
          <span className="text-black text-sm font-normal leading-normal"> Have a coupon? </span>
          <span className="text-red-600 text-sm font-normal underline leading-normal">Click here to enter your code</span>
        </div>
      </div>

      <div className="w-48 h-5 left-[6px] top-[200.79px] absolute justify-center text-black text-base font-bold leading-tight">Billing Detail</div>

      <div className="w-20 h-5 left-[48px] top-[250.58px] absolute justify-center">
        <span className="text-black text-sm font-normal leading-tight">First Name </span>
        <span className="text-red-600 text-sm font-normal leading-tight">*</span>
      </div>
      <input
        type="text"
        name="firstName"
        placeholder="First name"
        className="w-[360px] h-11 left-[49px] top-[282.58px] absolute bg-white rounded-md outline outline-1 outline-stone-300 px-3"
      />

      <div className="w-20 h-5 left-[418.41px] top-[250.58px] absolute justify-center">
        <span className="text-black text-sm font-normal leading-tight">Last Name </span>
        <span className="text-red-600 text-sm font-normal leading-tight">*</span>
      </div>
      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        className="w-[360px] h-11 left-[419.41px] top-[282.58px] absolute bg-white rounded-md outline outline-1 outline-stone-300 px-3"
      />

      <div className="w-44 h-5 left-[48px] top-[350.58px] absolute justify-center">
        <span className="text-black text-sm font-normal leading-tight">Company Name </span>
        <span className="text-neutral-400 text-sm font-normal leading-tight">(Optional)</span>
      </div>
      <input
        type="text"
        name="company"
        placeholder="Company (optional)"
        className="w-[722.83px] h-11 left-[49px] top-[382.58px] absolute bg-white rounded-md outline outline-1 outline-stone-300 px-3"
      />

      <div className="w-32 h-5 left-[48px] top-[450.58px] absolute justify-center">
        <span className="text-black text-sm font-normal leading-tight">Country / Region </span>
        <span className="text-red-600 text-sm font-normal leading-tight">*</span>
      </div>
      <select
        name="country"
        className="w-[722.83px] h-11 left-[49px] top-[482.58px] absolute bg-white rounded-md outline outline-1 outline-stone-300 px-3"
        defaultValue="US"
      >
        <option value="US">United States (US)</option>
        <option value="UK">United Kingdom (UK)</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
        <option value="MA">Morocco</option>
      </select>

      <div className="w-24 h-5 left-[48px] top-[550.58px] absolute justify-center text-black text-sm font-normal leading-tight">Street Address</div>
      <input
        type="text"
        name="address1"
        placeholder="House number and street name ..."
        className="w-[722.83px] h-11 left-[49px] top-[582.58px] absolute bg-white rounded-md outline outline-1 outline-stone-300 px-3"
      />
      <input
        type="text"
        name="address2"
        placeholder="Apartment, suite, unit, etc (Optional)"
        className="w-[722.83px] h-11 left-[49px] top-[635.58px] absolute bg-white rounded-md outline outline-1 outline-stone-300 px-3"
      />

      <div className="w-20 h-5 left-[48px] top-[703.58px] absolute justify-center">
        <span className="text-black text-sm font-normal leading-tight">Town / City </span>
        <span className="text-red-600 text-sm font-normal leading-tight">*</span>
      </div>
      <input
        type="text"
        name="city"
        className="w-[722.83px] h-11 left-[49px] top-[735.58px] absolute bg-white rounded-md outline outline-1 outline-stone-300 px-3"
      />

      <div className="w-28 h-5 left-[48px] top-[803.58px] absolute justify-center">
        <span className="text-black text-sm font-normal leading-tight">State / County </span>
        <span className="text-red-600 text-sm font-normal leading-tight">*</span>
      </div>
      <select
        name="state"
        className="w-[722.83px] h-11 left-[49px] top-[835.58px] absolute bg-white rounded-md outline outline-1 outline-stone-300 px-3"
        defaultValue="WA"
      >
        <option value="WA">Washington</option>
        <option value="CA">California</option>
        <option value="TX">Texas</option>
      </select>

      <div className="w-16 h-5 left-[48px] top-[903.58px] absolute justify-center">
        <span className="text-black text-sm font-normal leading-tight">Zip Code </span>
        <span className="text-red-600 text-sm font-normal leading-tight">*</span>
      </div>
      <input
        type="text"
        name="zip"
        className="w-[722.83px] h-11 left-[49px] top-[935.58px] absolute bg-white rounded-md outline outline-1 outline-stone-300 px-3"
      />

      <div className="w-28 h-5 left-[48px] top-[1003.58px] absolute justify-center">
        <span className="text-black text-sm font-normal leading-tight">Phone Number </span>
        <span className="text-red-600 text-sm font-normal leading-tight">*</span>
      </div>
      <input
        type="tel"
        name="phone"
        className="w-[722.83px] h-11 left-[49px] top-[1035.58px] absolute bg-white rounded-md outline outline-1 outline-stone-300 px-3"
      />

      <div className="w-28 h-5 left-[48px] top-[1103.58px] absolute justify-center">
        <span className="text-black text-sm font-normal leading-tight">Email Address </span>
        <span className="text-red-600 text-sm font-normal leading-tight">*</span>
      </div>
      <input
        type="email"
        name="email"
        className="w-[722.83px] h-11 left-[49px] top-[1135.58px] absolute bg-white rounded-md outline outline-1 outline-stone-300 px-3"
      />

      <label className="w-[724.83px] h-6 left-[48px] top-[1203.58px] absolute inline-flex items-center gap-2">
        <input type="checkbox" name="createAccount" className="h-4 w-4 border border-black/25 rounded" />
        <span className="text-black text-sm leading-tight">Create an account?</span>
      </label>

      <div className="w-44 h-5 left-[48px] top-[1278.98px] absolute justify-center text-black text-base font-bold leading-tight">Additional Information</div>
      <div className="w-36 h-5 left-[48px] top-[1328.77px] absolute justify-center">
        <span className="text-black text-sm font-normal leading-tight">Order Notes </span>
        <span className="text-neutral-400 text-sm font-normal leading-tight">(Optional)</span>
      </div>
      <textarea
        name="orderNotes"
        placeholder="Note about your order, e.g. special note for delivery"
        className="w-[722.83px] h-28 left-[49px] top-[1360.77px] absolute bg-white rounded-md outline outline-1 outline-stone-300 px-3 py-2"
      />

      <div className="w-20 h-5 left-[802.83px] top-[851.73px] absolute justify-center text-black text-base font-bold leading-tight">Your Order</div>

      <div className="w-[509.16px] h-80 left-[802.83px] top-[1146.89px] absolute bg-zinc-200 rounded-[10px]">
        <div className="w-[459.16px] h-24 left-[25px] top-[50px] absolute">
          <div className="w-36 h-4 left-[31px] top-0 absolute justify-center text-black text-sm font-bold leading-none">Direct Bank Transfer</div>
          <div className="w-96 h-16 left-[31px] top-[26.75px] absolute justify-center text-stone-500 text-xs font-normal leading-snug">Make your payment directly into our bank account. Please use your<br/>Order ID as the payment reference. Your order will not be shipped<br/>until the funds have cleared in our account.</div>
          <div className="w-5 h-5 left-0 top-[-0.50px] absolute bg-orange-300 rounded-[5px] outline outline-1 outline-offset-[-1px] outline-orange-300">
            <div className="w-5 h-5 left-0 top-0 absolute overflow-hidden">
              <div className="w-4 h-4 left-[1px] top-[1px] absolute overflow-hidden">
                <div className="w-2 h-1.5 left-[5.40px] top-[6.30px] absolute outline outline-[2.70px] outline-offset-[-1.35px] outline-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[459.16px] h-8 left-[25px] top-[152.58px] absolute">
          <div className="w-5 h-5 left-0 top-[-0.50px] absolute bg-white rounded-[5px] border border-black/25" />
          <div className="w-28 h-4 left-[31px] top-[3px] absolute justify-center text-black text-sm font-bold leading-none">Cash on Delivery</div>
        </div>
        <div className="w-[459.16px] h-6 left-[25px] top-[192.88px] absolute">
          <div className="w-12 h-4 left-[31px] top-[3px] absolute justify-center text-black text-sm font-bold leading-none">Paypal </div>
          <div className="w-24 h-4 left-[83.62px] top-[3px] absolute justify-center text-blue-600 text-sm font-normal underline leading-none">What’s Paypal?</div>
          <img className="w-14 h-3.5 left-[400.15px] top-[5.59px] absolute" src="https://placehold.co/59x15" />
          <div className="w-5 h-5 left-0 top-[-0.50px] absolute bg-white rounded-[5px] border border-black/25" />
        </div>
        <div className="w-[459.16px] h-12 left-[25px] top-[256.88px] absolute bg-orange-300 rounded-[10px]">
          <div className="w-20 h-4 left-[188.48px] top-[16px] absolute text-center justify-center text-white text-xs font-medium uppercase leading-none">place order</div>
        </div>
      </div>

      <div className="w-[509.16px] h-64 left-[802.83px] top-[901.52px] absolute bg-gray-100 rounded-[10px]">
        <div className="w-[459.16px] h-6 left-[25px] top-[25px] absolute border-b border-zinc-200">
          <div className="w-14 h-3.5 left-0 top-[-0.70px] absolute justify-center text-stone-500 text-xs font-medium uppercase leading-none">Product</div>
          <div className="w-16 h-3.5 left-[393.75px] top-[-0.70px] absolute justify-center text-stone-500 text-xs font-medium uppercase leading-none">sub total</div>
        </div>
        <div className="w-[459.16px] h-32 left-[25px] top-[58.39px] absolute border-b border-zinc-200">
          <img className="w-14 h-14 left-0 top-[10px] absolute" src="https://placehold.co/60x60" />
          <div className="w-48 h-10 left-[75px] top-[9.69px] absolute justify-center text-black text-sm font-medium leading-tight">Pinnaeple Macbook Pro 2022<br/>M1/ 512GB</div>
          <div className="w-5 h-6 left-[75px] top-[49.18px] absolute justify-center text-stone-500 text-sm font-normal leading-normal">x 3</div>
          <div className="w-56 h-5 left-0 top-[90.98px] absolute justify-center text-black text-sm font-normal leading-tight">Worldwide Standard Shipping Free</div>
          <div className="w-12 h-5 left-[407.76px] top-[90.98px] absolute justify-center text-red-600 text-sm font-normal leading-tight">+ $9.50</div>
        </div>
        <div className="w-20 h-6 left-[25px] top-[195.37px] absolute justify-center text-black text-base font-bold leading-normal">Order Total</div>
        <div className="w-20 h-6 left-[408.06px] top-[195.37px] absolute justify-center text-orange-300 text-base font-bold leading-normal">$1,746.50</div>
      </div>
    </div>
  )
}
