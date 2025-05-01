import { Formik } from 'formik';
import * as Yup from 'yup';


const entrySchema = Yup.object().shape({


});

const AddEntry = () => {
    const navigation = useNavigation(); //add navigation where it needs to be
    const { addEntry } = useEntryContext(); // this too

    return (
        <Box className="flex-1 p-4 dark:bg-gray-900 dark:text-white">
            <Formik
                initialValues={{
                    startDate: '',
                    startTime: '',
                    endDate: '',
                    endTime: '',
                    scaleRating: 0
                    // symptoms: [],
                }}
                validationSchema={entrySchema}
                onSubmit={(values, { resetForm }) => {
                    //add the entry to the context
                    addEntry({
                        id: Date.now(), //generate a unique id by the timestamp
                        startDate: values.startDate,
                        startTime: values.startTime,
                        endDate: values.endDate,
                        endTime: values.endTime,
                        scaleRating: values.scaleRating,
                        // symptoms: values.symptoms,
                    });

                    resetForm(); //reset the form after submission
                    navigation.goBack(); //go back to the previous screen
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <Box>
                        {/* add inputs */}
                        <Box className='mb-4'>
                            <Text size="lg" className="mb-2 text-stone-900 dark:text-white">Add New Entry</Text>
                            <Input variant='outlined' size 'md' 'className='bg-white dark:bg-zinc-900 mt-2'>
                                <InputField
                                    onChangeText={handleChange('startDate')}
                                    onBlur={handleBlur('startDate')}
                                    value={values.startDate}
                                    placeholder="Start Date"
                                />
                            </Input>
                                {errors.startDate && touched.startDate && (
                                    <Text size='sm' className="text-red-500">{errors.startDate}</Text>
                                )}
                    </Box>
                </Formik>
    );
}

export default AddEntry;