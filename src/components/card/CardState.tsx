import { Card, CardContent, Typography } from "@mui/material";
import { CardStateProps } from "../../interface";

const CardState = (props: CardStateProps) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
          Timezone: {props.timezone}
        </Typography>
        <Typography sx={{ fontSize: 15, mt: 1 }}>
          Date: {props.datetime? new Date(props.datetime).toLocaleString() : ''}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardState;
