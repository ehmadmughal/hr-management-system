<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head} from '@inertiajs/vue3';
import { computed, onMounted } from "vue";
import EmployeeTabs from "@/Components/Tabs/EmployeeTabs.vue";
import FlexButton from "@/Components/FlexButton.vue";
import {useExtractPersonalDetails} from "@/Composables/useExtractPersonalDetails.js";
import HistoryDescriptionList from "@/Components/DescriptionList/HistoryDescriptionList.vue";
import {initModals} from "flowbite";
import {useAgeCalculator} from "@/Composables/useAgeCalculator.js";
import Card from "@/Components/Card.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import ModifyIcon from "@/Components/Icons/ModifyIcon.vue";
import PlusIcon from "@/Components/Icons/PlusIcon.vue";
import DescriptionList from "@/Components/DescriptionList/DescriptionList.vue";
import DT from "@/Components/DescriptionList/DT.vue";
import DD from "@/Components/DescriptionList/DD.vue";
import DescriptionListItem from "@/Components/DescriptionList/DescriptionListItem.vue";
import GenericModal from "@/Components/GenericModal.vue";
import Table from "@/Components/Table/Table.vue";
import TableBody from "@/Components/Table/TableBody.vue";
import TableHead from "@/Components/Table/TableHead.vue";
import TableRow from "@/Components/Table/TableRow.vue";
import TableBodyAction from "@/Components/Table/TableBodyAction.vue";
import ToolTip from "@/Components/ToolTip.vue";
import {ref} from "vue";
import { Modal } from 'flowbite'
import { useForm } from '@inertiajs/vue3'
import {__} from "@/Composables/useTranslations.js";

let {extractPersonalDetails} = useExtractPersonalDetails()
// let modalInstance = null;

onMounted(() => {
    initModals();
});

const props = defineProps({
    employee: Object,
})


// Add Document Form
const documentForm = useForm({
    document_id: null, // New field to determine if we are editing
    document_name: null,
    expiration_date: null,
    file: null,
    employee_id: props.employee.id
});


const openEditDocument = (doc) => {
    documentForm.document_id = doc.id;
    documentForm.document_name = doc.document_name;
    documentForm.file = null;
    documentForm.expiration_date = doc.expiration_date;
    
};

const submitDocument = () => {
    // If document_id exists, we are editing – use the update route
    if (documentForm.document_id) {
        console.log('update');
        documentForm.submit('post',route('documents.update', documentForm.document_id), {
            preserveScroll: true,
            onSuccess: () => {
                // Hide the modal using Flowbite
                const modal = new Modal(document.getElementById('addDocumentModal'));
                modal.hide();

                // Reset the form
                documentForm.reset();

                // Refresh employee details (if available) or reload
                if (typeof fetchEmployeeDetails === "function") {
                    fetchEmployeeDetails();
                } else {
                    window.location.reload();
                }
            }
        });
    } else {
        console.log('store')
        console.log(documentForm);
        // Otherwise, create a new document
        documentForm.submit('post',route('documents.store'), {
            preserveScroll: true,
            onSuccess: () => {
                const modal = new Modal(document.getElementById('addDocumentModal'));
                modal.hide();
                documentForm.reset();
                if (typeof fetchEmployeeDetails === "function") {
                    fetchEmployeeDetails();
                } else {
                    window.location.reload();
                }
            }
        });
    }
};


const calculateDaysLeft = (expirationDate) => {
    if (!expirationDate) return __('N/A');
    const today = new Date();
    const expiry = new Date(expirationDate);
    const timeDiff = expiry - today;

    return timeDiff > 0 ? Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) : __('Expired');
};


const computedManages = computed(() => {
    const filteredArray = props.employee.manages
        .map(({department_id, branch_id}) => ({department_id, branch_id})) // Extract properties
        .filter(({department_id, branch_id}) => department_id !== null || branch_id !== null); // Ignore null values

    const branches = filteredArray
        .map(({branch_id}) => branch_id)
        .filter(Boolean)
        .join(", ");

    const departments = filteredArray
        .map(({department_id}) => department_id)
        .filter(Boolean)
        .join(", ");

    let result = '';
    if (branches !== '') {
        result += __('Branches') + `: #${branches}`;
    }
    if (departments !== '') {
        if (result !== '') {
            result += ' - ';
        }
        result += __('Departments') + `: #${departments}`;
    }

    return result;
});
</script>

<template>
    <Head :title="__('Employee View')"/>
    <AuthenticatedLayout>
        <template #tabs>
            <EmployeeTabs/>
        </template>
        <div class="py-8">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Card class="!mt-0">
                    <div class="flex justify-between items-center mb-4">
                        <h1 class="card-header">
                            {{
                                __('Employee View :ifAdmin', {ifAdmin: props.employee.manages.length > 0 ? '(' + __('Manager') + ')' : ''})
                            }} </h1>
                        <div class="flex inline-flex gap-4">
                            <FlexButton v-if="$page.props.auth.user.roles.includes('admin')"
                                        :text="__('Modify Employee Data')"
                                        :href="route('employees.edit', {id: employee.id})">
                                <ModifyIcon/>
                            </FlexButton>
                            <FlexButton v-else :text="__('Modify Data')"
                                        :href="route('profile.edit', {id: employee.id})">
                                <ModifyIcon/>
                            </FlexButton>
                        </div>
                    </div>

                    <h2 class="card-subheader">{{ __('Basic Info') }}</h2>
                    <DescriptionList>
                        <DescriptionListItem colored>
                            <DT>{{ __('Name') }}</DT>
                            <DD>{{ employee.name }}</DD>
                        </DescriptionListItem>
                        <DescriptionListItem colored>
                            <DT>{{ __('ID') }}</DT>
                            <DD>{{ employee.id }}</DD>
                        </DescriptionListItem>
                        <DescriptionListItem>
                            <DT>{{ __('Phone') }}</DT>
                            <DD><a :href="'tel:' + employee.phone">{{ employee.phone }}</a></DD>
                        </DescriptionListItem>
                        <DescriptionListItem>
                            <DT>{{ __('National ID') }}</DT>
                            <DD>{{ employee.national_id }}</DD>
                        </DescriptionListItem>
                        <DescriptionListItem colored>
                            <DT>{{ __('Email') }}</DT>
                            <DD><a :href="'mailto:' + employee.email">{{ employee.email }}</a></DD>
                        </DescriptionListItem>

                        <DescriptionListItem colored>
                            <DT>{{ __('Gender') }}</DT>
                            <DD>{{
                                    extractPersonalDetails(employee.national_id).isMale ? __('Male') : __('Female')
                                }}
                            </DD>
                        </DescriptionListItem>

                        <DescriptionListItem>
                            <DT>{{ __('Bank Account Details') }}</DT>
                            <DD>{{ employee.bank_acc_no ?? __('N/A') }}</DD>
                        </DescriptionListItem>

                        <DescriptionListItem>
                            <DT>{{ __('Birthday') }}</DT>
                            <DD>{{
                                    extractPersonalDetails(employee.national_id).date_localized +
                                    ' - ' + useAgeCalculator(extractPersonalDetails(employee.national_id).date) + ' ' + __('Years')
                                }}
                            </DD>
                        </DescriptionListItem>

                        <DescriptionListItem colored>
                            <DT>{{ __('Hire Date') }}</DT>
                            <DD>{{ employee.hired_on }}</DD>
                        </DescriptionListItem>

                        <DescriptionListItem colored>
                            <DT>{{ __('Remote Worker?') }}</DT>
                            <DD>{{ props.employee.is_remote ? __('Yes') : __('No') }}</DD>
                        </DescriptionListItem>

                        <DescriptionListItem>
                            <DT>{{ __('Address') }}</DT>
                            <DD><a :href="'https://www.google.com/maps/search/?api=1&query=' + props.employee.address"
                                   target=”_blank”>{{ employee.address }}</a></DD>

                        </DescriptionListItem>
                    </DescriptionList>
                </Card>
                <Card>
                    <h2 class="mb-2 ml-1 font-semibold">{{ __('Technical Info') }}</h2>
                    <DescriptionList>
                        <DescriptionListItem colored>
                            <DT>{{ __('Branch') }}</DT>
                            <DD>{{ employee.branch_name ?? __('N/A') }}</DD>
                        </DescriptionListItem>

                        <DescriptionListItem colored>
                            <DT>{{ __('Department') }}</DT>
                            <DD>{{ employee.department_name ?? __('N/A') }}</DD>
                        </DescriptionListItem>

                        <DescriptionListItem>
                            <DT>{{ __('Salary') }}</DT>
                            <DD>{{
                                    employee.salaries[employee.salaries.length - 1]['salary'].toLocaleString() + ' ' + employee.salaries[employee.salaries.length - 1]['currency']
                                }}
                            </DD>
                        </DescriptionListItem>

                        <DescriptionListItem>
                            <DT>{{ __('Position') }}</DT>
                            <DD>{{
                                    (employee.employee_positions.length === 0) ? __('N/A') : employee.employee_positions[employee.employee_positions.length - 1]['position']?.['name'] ?? __('N/A')
                                }}
                            </DD>
                        </DescriptionListItem>

                        <DescriptionListItem colored>
                            <DT>{{ __('Shift') }}</DT>
                            <DD>{{
                                    (employee.employee_shifts.length === 0) ? __('N/A') : employee.employee_shifts.filter(shift => shift.end_date === null).map(shift => shift.shift?.name)[0] ?? __('N/A')
                                }}
                            </DD>
                        </DescriptionListItem>

                        <DescriptionListItem colored>
                            <DT>{{ __('Access Permissions') }}</DT>
                            <DD>{{
                                    (employee.roles.length === 0) ? __('Not Assigned') : employee.roles[employee.roles.length - 1]['name'].replace(/_/g, ' ').replace(/\b\w/g, (match) => match.toUpperCase())
                                }}
                            </DD>
                        </DescriptionListItem>

                        <DescriptionListItem>
                            <DT>
                                {{ __('Manages') }}
                                <ToolTip direction="top">
                                    {{
                                        __('IDs of the branches and/or departments that this employee manages, if any.')
                                    }}
                                </ToolTip>
                            </DT>
                            <DD>{{ props.employee.manages.length > 0 ? computedManages : __('Nothing') }}</DD>
                        </DescriptionListItem>
                    </DescriptionList>
                </Card>
                <Card>
                    <div class="flex justify-between items-center mb-2">
                        <h2 class="ml-1 font-semibold">{{ __('Employee Documents') }}</h2>
                        <!-- Add Document Button -->
                        <PrimaryButton v-if="$page.props.auth.user.roles.includes('admin')"
                            :data-modal-target="'addDocumentModal'"
                            :data-modal-toggle="'addDocumentModal'"
                            class="px-4 py-2">
                            <PlusIcon/>
                            {{ __('Add Document') }}
                        </PrimaryButton>
                    </div>
                    <Table :totalNumber="1" :enablePaginator="false">
                        <p class="test">{{ employee.salaries }}</p>
                        <template #Head>
                            <TableHead>{{ __('Document Name') }}</TableHead>
                            <TableHead>{{ __('Expiry Date') }}</TableHead>
                            <TableHead>{{ __('Days Left Until Expire') }}</TableHead>
                            <TableHead>{{ __('Action') }}</TableHead>
                        </template>

                        <!--Iterate Here-->
                        <template #Body>
                            <TableRow v-for="document in employee.documents" :key="document.id">
                                <TableBody>{{ document.document_name }}</TableBody>
                                <TableBody>{{ document.expiration_date ?? __('No Expiry') }}</TableBody>
                                <TableBody>{{ calculateDaysLeft(document.expiration_date) }}</TableBody>
                                <td><a :href="route('downloadDocument', { fileName: document.file_path })"
                                           target="_blank" class="font-medium text-purple-600 dark:text-purple-500 hover:underline">
                                    {{__('View')}}
                                </a>
                                    <a href="#" v-if="$page.props.auth.user.roles.includes('admin')"
                                        @click.prevent="openEditDocument(document)" :data-modal-target="'addDocumentModal'"
                                       :data-modal-toggle="'addDocumentModal'"
                                       class="ml-2 font-medium text-purple-600 dark:text-purple-500 hover:underline">
                                        {{ __('Edit') }}
                                    </a>
                                </td>
                            </TableRow>
                        </template>
                    </Table>
                    <TableRow v-if="!employee.documents || !employee.documents.length">
                        <TableBody class="text-center">
                            {{ __('No documents available') }}
                        </TableBody>
                    </TableRow>
                    <!-- Add Document Modal -->
                    <GenericModal
                        modalId="addDocumentModal"
                        :modalHeader="documentForm.document_id ? __('Edit Document') : __('Add New Document')"
                        :hasCustomFooter="true">
                        <form @submit.prevent="submitDocument" class="space-y-4">
                            <!-- Document Name Field -->
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    {{ __('Document Name') }}
                                </label>
                                <input
                                    v-model="documentForm.document_name"
                                    type="text"
                                    required
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                                    :class="{ 'border-red-500': documentForm.errors.document_name }">
                                <p v-if="documentForm.errors.document_name" class="mt-2 text-sm text-red-600">
                                    {{ documentForm.errors.document_name }}
                                </p>
                            </div>

                            <!-- File Upload Field -->
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    {{ __('File') }}
                                </label>
                                <input
                                    type="file"
                                    @change="documentForm.file = $event.target.files[0]"
                                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
                                <p v-if="documentForm.errors.file" class="mt-2 text-sm text-red-600">
                                    {{ documentForm.errors.file }}
                                </p>
                            </div>

                            <!-- Expiration Date Field -->
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    {{ __('Expiration Date') }}
                                </label>
                                <input
                                    v-model="documentForm.expiration_date"
                                    type="date"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500">
                            </div>
                        </form>

                        <!-- Custom Footer Slot -->
                        <template #customFooter>
                            <SecondaryButton
                                class="mr-2"
                                type="button"
                                @click="resetDocumentForm"
                                :data-modal-hide="'addDocumentModal'">
                                {{ __('Cancel') }}
                            </SecondaryButton>
                            <PrimaryButton
                                type="submit"
                                @click="submitDocument"
                                :disabled="documentForm.processing">
                                {{ documentForm.processing
                                ? __('Processing...')
                                : (documentForm.document_id ? __('Update') : __('Upload'))
                                }}
                            </PrimaryButton>
                        </template>
                    </GenericModal>
                </Card>
                <Card>
                    <h2 class="mb-2 ml-1 font-semibold">{{ __('History') }}</h2>

                    <HistoryDescriptionList>
                        <div class="px-4 py-3.5">
                            <dt class="text-sm font-medium">{{ __('Previous Salaries') }}</dt>

                            <GenericModal modalId='Salaries Modal'
                                          :title="__('Click Here To See Salary History')"
                                          :modalHeader="__('Previous Salaries')"
                                          :hasCancel="false">

                                <Table :totalNumber="1" :enablePaginator="false">
                                    <p class="test">{{ employee.salaries }}</p>
                                    <template #Head>
                                        <TableHead>{{ __('Currency') }}</TableHead>
                                        <TableHead>{{ __('Salary') }}</TableHead>
                                        <TableHead>{{ __('Starting From') }}</TableHead>
                                        <TableHead>{{ __('Ending At') }}</TableHead>
                                    </template>

                                    <!--Iterate Here-->
                                    <template #Body>
                                        <TableRow v-for="salary in employee.salaries" :key="salary.id">
                                            <TableBody>{{ salary.currency }}</TableBody>
                                            <TableBody>{{ salary.salary }}</TableBody>
                                            <TableBody>{{ salary.start_date }}</TableBody>
                                            <TableBody>{{ salary.end_date ?? __('Current') }}</TableBody>
                                        </TableRow>
                                    </template>
                                </Table>
                            </GenericModal>
                        </div>

                        <div class="px-4 py-3.5">
                            <dt class="text-sm font-medium">{{ __('Previous Positions') }}</dt>

                            <GenericModal modalId='Positions Modal'
                                          :title="__('Click Here To See Positions History')"
                                          :modalHeader="__('Previous Positions')"
                                          :hasCancel="false">

                                <Table :totalNumber="1" :enablePaginator="false">
                                    <template #Head>
                                        <TableHead>{{ __('Position') }}</TableHead>
                                        <TableHead>{{ __('Starting From') }}</TableHead>
                                        <TableHead>{{ __('Ending At') }}</TableHead>
                                    </template>

                                    <!--Iterate Here-->
                                    <template #Body>
                                        <TableRow v-for="position in employee.employee_positions" :key="position.id">
                                            <TableBody>{{ position.position?.name ?? __('DELETED POSITION') }}
                                            </TableBody>
                                            <TableBody>{{ position.start_date }}</TableBody>
                                            <TableBody>{{ position.end_date ?? __('Current') }}</TableBody>
                                        </TableRow>
                                    </template>
                                </Table>
                            </GenericModal>
                        </div>

                        <div class="px-4 py-3.5">
                            <dt class="text-sm font-medium">{{ __('Previous Shifts') }}</dt>

                            <GenericModal modalId='Shifts Modal'
                                          :title="__('Click Here To See Shifts History')"
                                          :modalHeader="__('Previous Shifts')"
                                          :hasCancel="false">

                                <Table :totalNumber="1" :enablePaginator="false">
                                    <template #Head>
                                        <TableHead>{{ __('Shift') }}</TableHead>
                                        <TableHead>{{ __('Starting From') }}</TableHead>
                                        <TableHead>{{ __('Ending At') }}</TableHead>
                                    </template>

                                    <!--Iterate Here-->
                                    <template #Body>
                                        <TableRow v-for="shift in employee.employee_shifts" :key="shift.id">
                                            <TableBody>{{ shift.shift?.name ?? __('DELETED SHIFT') }}</TableBody>
                                            <TableBody>{{ shift.start_date }}</TableBody>
                                            <TableBody>{{ shift.end_date ?? __('Current') }}</TableBody>
                                        </TableRow>
                                    </template>
                                </Table>
                            </GenericModal>
                        </div>

                    </HistoryDescriptionList>
                </Card>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
