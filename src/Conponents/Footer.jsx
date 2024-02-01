import "./Footer.css";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { PiLinkSimpleFill } from "react-icons/pi";
import { IoMdContacts } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

import {
  FaPhoneSquareAlt,
  FaMailBulk,
  FaFacebookMessenger,
  FaLine,
} from "react-icons/fa";

function Footer({ ST_Footer }) {
  return (
    <div className="Footer">
      <div className="FT01">
        <h1 className="FT_icon">
          <MdOutlineMapsHomeWork />
        </h1>
        <div>{ST_Footer.map((e) => e.Box1_2)}</div>
      </div>
      <div className="FT02">
        <h1 className="FT_icon">
          <PiLinkSimpleFill />
        </h1>
        <a href="/home">{ST_Footer.map((e) => e.Box2_1)}</a> <br />
        <a href="/product">{ST_Footer.map((e) => e.Box2_2)}</a> <br />
        <a href="/about">{ST_Footer.map((e) => e.Box2_3)}</a> <br />
        <a href="/contact">{ST_Footer.map((e) => e.Box2_4)}</a> <br />
        <a href="/addmin">{ST_Footer.map((e) => e.Box2_5)}</a>
      </div>
      <div className="FT03">
        <h1 className="FT_icon">
          <IoMdContacts />
        </h1>

        <a href="tel:091-045 5990" target="_blank">
          โทร : {ST_Footer.map((e) => e.Phone)}
        </a>
        <br />
        <a href="mailto:dxemb@dx-emb.com" target="_blank">
          Mail : {ST_Footer.map((e) => e.Email)}
        </a>
        <br />
        <a href="https://line.me/ti/p/-yPHknooDV" target="_blank">
          Line : {ST_Footer.map((e) => e.Line)}
        </a>
        <br />
        <a href="https://www.facebook.com/DxEMB" target="_blank">
          Faceboock : {ST_Footer.map((e) => e.Facebook)}
        </a>
        <div className="socail">
          <a href="tel:091-045 5990" target="_blank">
            <FaPhoneSquareAlt />
          </a>
          <a href="mailto:dxemb@dx-emb.com" target="_blank">
            <FaMailBulk />
          </a>
          <a href="https://line.me/ti/p/-yPHknooDV" target="_blank">
            <FaLine />
          </a>
          <a href="https://www.facebook.com/DxEMB" target="_blank">
            <FaFacebookMessenger />
          </a>
        </div>
      </div>
      <div className="FT04">
        <h1 className="FT_icon">
          <FaLocationDot />
        </h1>
        <iframe
          className="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1938.060590982372!2d100.35351809194995!3d13.711109600361308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e296092f077d85%3A0xdba76fb25af80fb!2z4LiL4Lit4LiiIOC5gOC4nuC4iuC4o-C5gOC4geC4qeC4oSAxMDYg4LmB4LiC4Lin4LiH4Lir4LiZ4Lit4LiH4LiE4LmJ4Liy4LiH4Lie4Lil4Li5IOC5gOC4guC4leC4q-C4meC4reC4h-C5geC4guC4oSDguIHguKPguLjguIfguYDguJfguJ7guKHguKvguLLguJnguITguKMgMTAxNjA!5e0!3m2!1sth!2sth!4v1706510902172!5m2!1sth!2sth"
        ></iframe>
      </div>
    </div>
  );
}

export default Footer;
