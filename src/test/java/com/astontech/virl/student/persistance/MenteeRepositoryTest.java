package com.astontech.virl.student.persistance;

import com.astontech.virl.student.Application;
import com.astontech.virl.student.domain.Mentee;
import com.astontech.virl.student.repositories.MenteeRepository;
import com.astontech.virl.student.services.MenteeService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class)
public class MenteeRepositoryTest {

    @Autowired
    private MenteeRepository menteeRepository;

    @Autowired
    private MenteeService menteeService;

    @Test
    public void testMenteeRepository() {

        Mentee mentee = new Mentee();
        mentee.setName("Michael");
        mentee.setBu("Java Developer");
        mentee.setSite("MN");
        mentee.setAssignedVirlInstance("virl01");

        // SAVE
        Mentee savedMentee = menteeRepository.save(mentee);
        Assert.assertNotNull(savedMentee.getId());

        // GET
        Mentee foundMentee = menteeRepository.findById(savedMentee.getId()).orElse(null);
        Assert.assertNotNull(foundMentee);

        // UPDATE
        foundMentee.setSite("VA");
        Mentee updatedMentee = menteeRepository.save(foundMentee);
        Assert.assertEquals("VA", updatedMentee.getSite());

        // DELETE
        String idToDelete = updatedMentee.getId();
        Assert.assertNotNull(menteeRepository.findById(idToDelete));

//        System.out.println(menteeRepository.findAll().toString());


    }

    @Test
    public void testMenteeService() {
        Mentee mentee = new Mentee();
        mentee.setName("Bipin");
        mentee.setBu("Senior Java Developer");
        mentee.setSite("MN");
        mentee.setAssignedVirlInstance("virl02");

        // SAVE
        Mentee savedMentee = menteeService.saveMentee(mentee);
        Assert.assertNotNull(savedMentee.getId());
        System.out.println(savedMentee);

        // GET
        Mentee foundMentee = menteeService.findMenteeById(mentee.getId());
        Assert.assertNotNull(foundMentee);
        System.out.println(foundMentee);

        Mentee foundByName = menteeRepository.findMenteeByName("Bipin");
        Assert.assertEquals("Bipin", foundByName.getName());

        // UPDATE
        foundMentee.setSite("VA");
        Mentee updatedMentee = menteeService.saveMentee(foundMentee);
        Assert.assertEquals("VA", updatedMentee.getSite());

        // DELETE
        String idToDelete = updatedMentee.getId();
        Assert.assertNotNull(menteeService.findMenteeById(idToDelete));
        menteeService.deleteMentee(idToDelete);

        System.out.println(menteeService.findAllMentees());
    }

}
