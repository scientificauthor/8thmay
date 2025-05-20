export function FooterContact() {
  return (
    <div className="sm:-mt-14">
      <h3 className=" mb-3 font-light sm:text-right sm:text-[#A5A5A5]">
        Contact
      </h3>
      <div className="space-y-2 text-left md:text-right pl-4 font-light">
        <div className="space-y-1">
          <a
            href="mailto:hello@citehub.net"
            className="block text-sm hover:underline"
          >
            hello@citehub.net
          </a>
          <div className="text-sm">Fax: +90 212 000 0000</div>
        </div>

        <div className="text-sm">
          <div>citehub.net Inc.</div>
          <div>Marmara District N17 F5</div>
          <div>34520 Istanbul / Turkey</div>
        </div>

        <a href="#" className="inline-block text-sm hover:underline">
          Contact Form
        </a>
      </div>
    </div>
  );
}