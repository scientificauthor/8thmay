export function FooterContact() {
  return (
    <div className="space-y-4 text-left md:text-right">
      <div className="space-y-1">
        <a href="mailto:hello@citehub.net" className="block text-sm hover:underline">
          hello@citehub.net
        </a>
        <div className="text-sm">Fax: +90 212 000 0000</div>
      </div>

      <div className="space-y-1 text-sm">
        <div className="font-medium">citehub.net Inc.</div>
        <div>Marmara District N17 F5</div>
        <div>34520 Istanbul / Turkey</div>
      </div>

      <a href="#" className="inline-block text-sm hover:underline">
        Contact Form
      </a>
    </div>
  )
}
