package com.astontech.virl.student.services.Impl;

import com.astontech.virl.student.domain.Mentee;
import com.astontech.virl.student.repositories.MenteeRepository;
import com.astontech.virl.student.services.MenteeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MenteeServiceImpl implements MenteeService {

    // This is parameter based injection -- same
    @Autowired
    private MenteeRepository menteeRepository;

    // THIS IS CONSTRUCTOR BASED INJECTION -- same
//    @Autowired
//    public MenteeServiceImpl(MenteeRepository menteeRepository) {
//        this.menteeRepository = menteeRepository;
//    }

    @Override
    public Mentee saveMentee(Mentee mentee) {
        return menteeRepository.save(mentee);
    }

    @Override
    public Mentee findMenteeById(String id) {
        return menteeRepository.findById(id).orElse(null);
    }

    @Override
    public Mentee findMenteeByName(String name) {
        return menteeRepository.findMenteeByName(name);
    }

    @Override
    public List<Mentee> findAllMentees() {
        List<Mentee> menteeList = new ArrayList<>();
        menteeRepository.findAll().forEach(menteeList::add);
        return menteeList;
    }

    @Override
    public void deleteMentee(String id) {
        menteeRepository.deleteById(id);
    }
}
