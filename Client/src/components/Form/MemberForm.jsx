import React from 'react';
import TextField from '@mui/material/TextField';
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  FormGroup,
  Checkbox,
  Typography
} from '@mui/material';
import { useForm } from "react-hook-form";

const MemberForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="Member__form">
      <Typography sx= {{ marginTop: '10px'}}><h1> Create new project </h1></Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <TextField sx={{width:'800px'}}
          id="outlined-basic" 
          name="ProjectTitle" 
          label="Project Title" 
          variant="outlined" 
          fullWidth 
          {...register("ProjectTitle", { required: "Project Title is required." })}
          error={Boolean(errors.ProjectTitle)}
          helperText={errors.ProjectTitle?.message}
        /> </div>
        <div>
        <TextField 
          id="outlined-basic"
          label="Project Category"
          variant="outlined"
          fullWidth
          name="ProjectCategory"
          {...register("ProjectCategory", { required: "Project Category is required." })}
          error={Boolean(errors.ProjectCategory)}
          helperText={errors.ProjectCategory?.message}
        /> </div>
        <div>
        <TextField
          id="outlined-basic"
          label="Project Description"
          variant="outlined"
          fullWidth
          name="ProjectDescription"
          {...register("l", { required: "Project Description is required." })}
          error={Boolean(errors.ProjectDescription)}
          helperText={errors.ProjectDescription?.message}
        /></div>
        <div>
        <TextField 
          id="outlined-basic"
          label="Add Developers"
          variant="outlined"
          fullWidth
          name="AddDevelopers"
          {...register("AddDevelopers", { required: "Adding Developers is required." })}
          error={Boolean(errors.AddDevelopers)}
          helperText={errors.AddDevelopers?.message}
        /> </div>
{/* Radio button */}
        <FormControl error={Boolean(errors.projectStatus )} >
          <FormLabel component="legend"> Choose project Status </FormLabel>
          <RadioGroup row aria-label="projectStatus " name="projectStatus ">
            <FormControlLabel 
              value="Public" 
              control={
                <Radio {...register("projectStatus", { required: "Choose project Status " })} />
              } 
              label="Public"
             />
            <FormControlLabel 
              value="private" 
              control={
                <Radio {...register("projectStatus", { required: "Choose project Status " })} />
              } 
              label="private" 
              />
            
          </RadioGroup>
          <FormHelperText style={{color:'#d32f2f'}}>{errors.gender?.message}</FormHelperText>
        </FormControl>
        <div className="clearfix"></div>
{/* Check box */}
        <FormGroup 
          error={Boolean(errors.tnc)}
          style={{ display: "block", marginTop: "17px" }}
        >
          <FormControlLabel 
            control={
              <Checkbox  name="tnc" {...register("tnc", { required: "please agree our terms and condtions" })} />
            } 
            label="I agree all terms and conditions" 
          />
        </FormGroup>
        <FormHelperText style={{color:'#d32f2f'}}>{errors.tnc?.message}</FormHelperText>
        <div className="clearfix"></div>
        <Button variant="contained" color="primary" type="submit" className="btns">
            create new project
          </Button>
      </form>
    </div>
  )
}
export default MemberForm;
