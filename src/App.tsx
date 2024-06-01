import { useEffect, useState } from "react";
import SelectState from "./components/select/SelectState";
import { SelectChangeEvent } from "@mui/material";
import CardState from "./components/card/CardState";
import API from "./API/index";
import { GetStateTimezoneResponse } from "./interface";

const App = () => {
  const [state, setState] = useState("");
  const [timeZone, setTimeZone] = useState<GetStateTimezoneResponse | null>(
    null
  );

  const handleStateChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };

  const fetchTimeZone = async () => {
    try {
      const response = await API.get(`/timezone/America/${state}`);
      setTimeZone(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchTimeZone();
  }, [state]);

  return (
    <div className="bg-[#EAEFBD] w-[100wh] h-[100vh] p-4">
      <div className="flex flex-col justify-center items-center gap-y-10">
        <SelectState
          state={state}
          onSelectChange={(event: SelectChangeEvent) =>
            handleStateChange(event)
          }
        />
        {!!state && (
          <CardState
            timezone={timeZone?.timezone}
            datetime={timeZone?.datetime}
          />
        )}
      </div>
    </div>
  );
};

export default App;
