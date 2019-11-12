package com.astontech.virl.student.bootstrap;

import com.astontech.virl.student.domain.Mentee;
import com.astontech.virl.student.domain.UserProfile;
import com.astontech.virl.student.repositories.UserProfileRepository;
import com.astontech.virl.student.services.MenteeService;
import com.astontech.virl.student.services.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.util.stream.IntStream;

@Component
public class SeedData implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private UserProfileRepository userProfileRepository;

    @Autowired
    private UserProfileService userProfileService;

    @Autowired
    private MenteeService menteeService;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        generateSeedDataUserProfile();
        generateSeedDataMentee(10);
    }

    public void generateSeedDataUserProfile() {
        UserProfile userProfile = new UserProfile();
        userProfile.setUsername("MRwhom");
        userProfile.setRole("Administrator");
        userProfile.setLanding("Fragle Rock");

        // SAVE
        userProfileRepository.save(userProfile);

        UserProfile userProfile1 = new UserProfile();
        userProfile1.setUsername("GheUp");
        userProfile1.setRole("Administrator");
        userProfile1.setLanding("Fragle Rock");

        // SAVE
        userProfileService.saveProfile(userProfile1);
    }

    public void generateSeedDataMentee(int numberOfMentees) {
        IntStream.range(1, numberOfMentees)
                .forEach(i -> {
                    Mentee mentee = new Mentee();
                    mentee.setName("Mentee " + i);
                    mentee.setBu("Cisco");
                    mentee.setSite((i % 2 == 0) ? "CA" : "MN");
                    menteeService.saveMentee(mentee);
                });
    }
}
