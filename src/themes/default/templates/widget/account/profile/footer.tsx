import { FC, useState } from "react";
import { Address, Button, Contacts } from "./widget.styles";
import { Template } from "@4i4/theme-registry";

const Profile: FC<any> = ({ account, profile }) => {
  const [dialog, setDialog] = useState<boolean>(false);
  return (
    <>
      {dialog && (
        <Template
          template="create-case"
          context="modal"
          account={account}
          onClose={() => setDialog(false)}
        />
      )}
      <Contacts>
        <div>
          <Template template="direction" context="icon" />
          <Address>
            <span>
              {profile?.address.city ?? ""} {profile?.address.zip ?? ""}
            </span>
            <span>{profile?.address.address ?? ""}</span>
          </Address>
        </div>
        <div>
          <Template template="phone-alt" context="icon" />
          <Address>
            <span>{profile?.telephone ?? ""}</span>
          </Address>
        </div>
        <div>
          <Template template="envelope" context="icon" />
          <Address>
            <span>{profile?.mail ?? ""}</span>
          </Address>
        </div>
        <div>
          <Button className="btn btn-primary" onClick={() => setDialog(true)}>
            Create a case
          </Button>
        </div>
      </Contacts>
    </>
  );
};

export default Profile;
