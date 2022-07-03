// import { Button, Paper, Typography } from "@mui/material";
// import { FormProvider, useForm } from "react-hook-form";
// import { FormInputText } from "./FormComponentsPartials/FormInputText";
// import { FormInputMultiCheckbox } from "./form-components/FormInputMultiCheckbox";
// import { FormInputDropdown } from "./form-components/FormInputDropdown";
// import { FormInputDate } from "./form-components/FormInputDate";
// import { FormInputSlider } from "./form-components/FormInputSlider";
// import { FormInputRadio } from "./form-components/FormInputRadio";

// const defaultValues = {
//     textValue: "",
//     radioValue: "",
//     checkboxValue: [],
//     dateValue: new Date(),
//     dropdownValue: "",
//     sliderValue: 0,
// };

// export default function FormComponent() {
//     const methods = useForm({ defaultValues: defaultValues });
//     const { handleSubmit, reset, control, setValue } = methods;
//     const onSubmit = (data: IFormInput) => console.log(data);

//     return (
//         <Paper>
//             <Typography variant="h6"> Form Demo </Typography>

//             <FormInputText name="textValue" control={control} label="Text Input" />
//             <FormInputRadio name={"radioValue"} control={control} label={"Radio Input"} />
//             <FormInputDropdownname="dropdownValue"control={control}label="Dropdown Input"/>
//             <FormInputDate name="dateValue" control={control} label="Date Input" />

//             <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
//                 Submit
//             </Button>
//             <Button onClick={() => reset()} variant={"outlined"}>
//                 Reset
//             </Button>
//         </Paper>
//     );
// };