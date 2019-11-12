package com.astontech.virl.student.controllers;

import com.astontech.virl.student.domain.Mentee;
import com.astontech.virl.student.services.MenteeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.awt.event.WindowFocusListener;
import java.util.List;

@RestController
@RequestMapping("/api/mentee")
public class MenteeController {

    private static final Logger log = LoggerFactory.getLogger(MenteeController.class);

    MenteeService menteeService;

    public MenteeController(MenteeService menteeService) {
        this.menteeService = menteeService;
    }

    // @RequestMapping(value = "/", method = RequestMethod.GET)
    @GetMapping("/")
    public List<Mentee> getAllMentees() {
        return menteeService.findAllMentees();
    }

    @GetMapping("/{id}")
    public Mentee getMenteeById(@PathVariable String id) {
        return menteeService.findMenteeById(id);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<Mentee> getMenteeByName(@PathVariable String name) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("company","Aston Technologies");
        headers.add("business-unit","Software Development");

        Mentee searchMentee = menteeService.findMenteeByName(name);
        if (searchMentee == null) {
            log.info("Mentee " + name + " Not found!");
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                 .headers(headers)
                                 .body(null);
        }
        return ResponseEntity.ok()
                             .headers(headers)
                             .body(searchMentee);
    }

    @PostMapping("/")
    public ResponseEntity<Mentee> saveMentee(@RequestBody Mentee mentee) {
        System.out.println(mentee.toString());
        Mentee savedMentee = menteeService.saveMentee(mentee);
        if (savedMentee.getId() == null) {
            // HTTP STATUS CODE 422
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(savedMentee);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(savedMentee);
    }

    @DeleteMapping("/{id}")
    public void deleteMentee(@PathVariable String id) {
        menteeService.deleteMentee(id);
    }

}
