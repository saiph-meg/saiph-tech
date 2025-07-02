import { FC, useState } from "react";
import { Button, Card, Icon, Wrap } from "./widget.styles";
import { Template } from "@4i4/theme-registry";

const Widget: FC<any> = ({ case: _case }) => {
  const [dialog, setDialog] = useState<boolean>(false);
  return (
    <>
      {dialog && (
        <Template
          template="case-action"
          context="modal"
          case={_case}
          onClose={() => setDialog(false)}
        />
      )}
      <Wrap>
        <Card title="Escalation Actions">
          <Icon>
            <Template template="alert" context="icon" />
          </Icon>
          <h6 style={{ margin: 0 }}>Could there be unusual behavior?</h6>
          <p
            className="text-center"
            style={{
              opacity: 0.5,
              fontSize: "0.9rem",
              margin: 0,
              maxWidth: "75%"
            }}>
            Maecenas interdum sapien sit amet gravida sollicitudin. Vestibulum
            malesuada ornare sem id suscipit.
          </p>
          <Button className="btn btn-primary" onClick={() => setDialog(true)}>
            Action
          </Button>
        </Card>
      </Wrap>
    </>
  );
};

export default Widget;
