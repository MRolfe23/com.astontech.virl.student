package com.astontech.virl.student.persistance;

import com.astontech.virl.student.Application;
import com.astontech.virl.student.domain.UserProfile;
import com.astontech.virl.student.repositories.UserProfileRepository;
import com.astontech.virl.student.services.UserProfileService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class)
public class UserProfileRepositoryTest {

    @Autowired
    private UserProfileRepository userProfileRepository;

    @Autowired
    private UserProfileService userProfileService;

    @Test
    public void testUserProfileRepository() {

        UserProfile userProfile = new UserProfile();
        userProfile.setUsername("MRwhom");
        userProfile.setRole("Administrator");
        userProfile.setLanding("Fragle Rock");

        // SAVE
        UserProfile savedProfile = userProfileRepository.save(userProfile);
        Assert.assertNotNull(savedProfile.getId());

        // GET
        UserProfile foundProfile = userProfileRepository.findByUsername("MRwhom");
        Assert.assertNotNull(foundProfile);

        // UPDATE
        foundProfile.setUsername("MRolfe23");
        UserProfile updateProfile = userProfileRepository.save(foundProfile);
        Assert.assertEquals("MRolfe23", updateProfile.getUsername());

        // DELETE
        String idToDelete = updateProfile.getId();
        Assert.assertNotNull(userProfileRepository.findById(idToDelete));

    }

    @Test
    public void testUserProfileService() {

        UserProfile userProfile = new UserProfile();
        userProfile.setUsername("GheUp");
        userProfile.setRole("Administrator");
        userProfile.setLanding("Fragle Rock");

        // SAVE
        UserProfile savedProfile = userProfileService.saveProfile(userProfile);
        Assert.assertNotNull(savedProfile.getId());

        // GET
        UserProfile foundProfile = userProfileService.findByUserName("GheUp").orElse(null);
        Assert.assertNotNull(foundProfile);

        // UPDATE
        foundProfile.setUsername("Ghep04");
        UserProfile updateProfile = userProfileService.saveProfile(foundProfile);
        Assert.assertEquals("Ghep04", updateProfile.getUsername());

        // DELETE
        String idToDelete = updateProfile.getId();
        Assert.assertNotNull(userProfileService.findProfileById(idToDelete));
        userProfileService.deleteProfile(idToDelete);

        UserProfile userProfile1 = new UserProfile();
        userProfile1.setUsername("GheUp");
        userProfile1.setRole("Administrator");
        userProfile1.setLanding("Fragle Rock");

        // SAVE
        UserProfile savedProfile1 = userProfileService.saveProfile(userProfile1);
        Assert.assertNotNull(savedProfile1.getId());

    }

}
