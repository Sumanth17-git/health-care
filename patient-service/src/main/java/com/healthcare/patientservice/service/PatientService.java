package com.healthcare.patientservice.service;

import com.healthcare.patientservice.model.Patient;
import com.healthcare.patientservice.repository.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    private final PatientRepository repository;

    public PatientService(PatientRepository repository) {
        this.repository = repository;
    }

    public Patient savePatient(Patient patient) {
        return repository.save(patient);
    }

    public List<Patient> getAllPatients() {
        return repository.findAll();
    }

    public Optional<Patient> getPatientById(Long id) {
        return repository.findById(id);
    }

    public Optional<Patient> updatePatient(Long id, Patient newData) {
        return repository.findById(id).map(patient -> {
            patient.setName(newData.getName());
            patient.setAge(newData.getAge());
            patient.setGender(newData.getGender());
            patient.setContact(newData.getContact());
            patient.setAddress(newData.getAddress());
            patient.setEmail(newData.getEmail());
            patient.setBloodGroup(newData.getBloodGroup());
            patient.setAllergies(newData.getAllergies());
            patient.setMedicalHistory(newData.getMedicalHistory());
            patient.setDiagnosis(newData.getDiagnosis());
            patient.setPrescription(newData.getPrescription());
            patient.setDoctorName(newData.getDoctorName());
            patient.setDepartment(newData.getDepartment());
            return repository.save(patient);
        });
    }

    public boolean deletePatient(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }
}
