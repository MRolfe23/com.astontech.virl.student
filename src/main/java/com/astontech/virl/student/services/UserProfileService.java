package com.astontech.virl.student.services;

import com.astontech.virl.student.domain.UserProfile;

import java.util.Optional;

public interface UserProfileService {

    Optional<UserProfile> findByUserName(String username);

    UserProfile saveProfile(UserProfile userProfile);

    void deleteProfile(String id);

    UserProfile findProfileById(String id);

    Iterable<UserProfile> findAllProfiles();

}
