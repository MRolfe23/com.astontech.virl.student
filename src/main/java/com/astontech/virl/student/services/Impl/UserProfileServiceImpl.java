package com.astontech.virl.student.services.Impl;

import com.astontech.virl.student.domain.UserProfile;
import com.astontech.virl.student.repositories.UserProfileRepository;
import com.astontech.virl.student.services.UserProfileService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserProfileServiceImpl implements UserProfileService {

    UserProfileRepository userProfileRepository;

    public UserProfileServiceImpl(UserProfileRepository userProfileRepository) {
        this.userProfileRepository = userProfileRepository;
    }

    @Override
    public Optional<UserProfile> findByUserName(String username) {
        return
                Optional.ofNullable(userProfileRepository.findByUsername(username));
    }

    @Override
    public UserProfile saveProfile(UserProfile userProfile) {
        return userProfileRepository.save(userProfile);
    }

    @Override
    public void deleteProfile(String id) {
        userProfileRepository.deleteById(id);
    }

    @Override
    public UserProfile findProfileById(String id) {
        return userProfileRepository.findById(id).orElse(null);
    }

    @Override
    public Iterable<UserProfile> findAllProfiles() {
        return userProfileRepository.findAll();
    }
}
